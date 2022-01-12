import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { get } from 'lodash';
import { withCookies } from 'react-cookie';
import { HomeContentWrapper, SelectedItem, Hline } from 'components/Home/HomeComponents';
import { QuantityInput, QuantityInput1 } from 'components/PrdQuantity/ProductQuantity';
import { PageTitle, ItemsContainer } from 'components/Categories/CatComponents';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { BuyButton, BtnContainer, PlanButton, PrimaryBtn, DefaultBtn, ModalBtnsWrapper } from 'components/Buttons';
import { addToCart } from 'redux/cart.slice';
import Link from 'next/link';
import PlannerSignedIn from 'containers/Modals/PlannerSignedIn';
import BuyModal from '../Home/TheBuyModal';
import { AddAlt16, SubtractAlt16 } from '@carbon/icons-react';
import { QTInput, AddBtn, SubBtn, ContentWrapper } from 'components/PrdQuantity/ProductQuantity';

const CategoryType = ({ cookies }) => {
  const router = useRouter();

  const {
    query: { type },
  } = router;

  let isAuthoriszed = cookies.get('access_token');
  let loggedIn = cookies.get('auth_token');

  const [products, setProducts] = useState(false);
  const [error, setError] = useState(null);

  const base = {
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items`,
    headers: {
      Authorization: `Bearer ${isAuthoriszed}`,
    },
  };

  useEffect(() => {
    switch (type) {
      case 'featured':
        axios({
          ...base,
          params: { featured: true },
        })
          .then(res => setProducts(res.data))
          .catch(err => setError(err.response));
        break;

      case 'latest':
        axios({
          ...base,
          params: { orderBy: `date_added` },
        })
          .then(res => setProducts(res.data))
          .catch(err => setError(err.response));

        break;

      case 'most-viewed':
        axios({
          ...base,
          params: { orderBy: `views` },
        })
          .then(res => setProducts(res.data))
          .catch(err => setError(err.response));
        break;

      case 'best-rated':
        axios({
          ...base,
          params: { orderBy: `ratings_average` },
        })
          .then(res => setProducts(res.data))
          .catch(err => setError(err.response));
        break;

      case 'most-liked':
        axios({
          ...base,
          params: { orderBy: `likes_sum` },
        })
          .then(res => setProducts(res.data))
          .catch(err => setError(err.response));
        break;

      case 'best-selling':
        axios({
          ...base,
          params: { orderBy: `orders_sum` },
        })
          .then(res => setProducts(res.data))
          .catch(err => setError(err.response));
        break;
      default:
        'recently-viewed';
    }
  }, [router]);

  const modified = get(products, 'data.items', []).map(obj => ({ ...obj, quantity: 1 }));

  const preparedItems = {};

  modified.forEach(item => {
    preparedItems[item.ID] = item;
  });

  const [items, setItems] = useState({});

  useEffect(() => {
    if (products) {
      setItems(preparedItems);
    }
  }, [products]);

  const handleQtyChange = (id, qty) => {
    // you probably want to create a new object
    // instead of mutating it in place
    setItems({ ...items, [id]: { ...items[id], quantity: parseInt(qty) } });
  };

  return (
    <>
      <HomeContentWrapper>
        {type === 'featured' && <PageTitle>{`FEATURED ITEMS`}</PageTitle>}
        {type === 'latest' && <PageTitle>{`LATEST`}</PageTitle>}
        {type === 'most-viewed' && <PageTitle>{`MOST VIEWED`}</PageTitle>}
        {type === 'best-rated' && <PageTitle>{`BEST RATED`}</PageTitle>}
        {type === 'most-liked' && <PageTitle>{`MOST LIKED`}</PageTitle>}
        {type === 'best-selling' && <PageTitle>{`BEST SELLING`}</PageTitle>}
        <ItemsContainer>
          {Object.values(items).map(product => (
            <ProductCard
              key={product.ID}
              productImg={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${product.featured_image}`}
              description={product.product_name}
              price={Number(product.local_price).toLocaleString()}
              currency={product.local_currency ? product.local_currency : `UGX`}
              id={product.ID}>
              <ContentWrapper>
                <AddBtn onClick={() => handleQtyChange(product.ID, product.quantity + 1)}>
                  <AddAlt16 />
                </AddBtn>
                <QTInput
                  type="number"
                  value={product.quantity}
                  onChange={e => handleQtyChange(product.ID, e.currentTarget.value)}
                />
                <SubBtn onClick={() => handleQtyChange(product.ID, product.quantity - 1)}>
                  <SubtractAlt16 />
                </SubBtn>
              </ContentWrapper>
              <BtnContainer>
                <BuyModal
                  ID={product.ID}
                  quantity={product.quantity}
                  featured_image={product.featured_image}
                  product_name={product.product_name}
                  local_price={product.local_price}
                  local_currency={`UGX`}
                />
                {loggedIn ? <PlannerSignedIn product={product} /> : <PlannerUnsignedIn />}
              </BtnContainer>
            </ProductCard>
          ))}
        </ItemsContainer>
      </HomeContentWrapper>
    </>
  );
};

export default withCookies(CategoryType);
