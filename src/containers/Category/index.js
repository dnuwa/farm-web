import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { get } from 'lodash';

import { withCookies } from 'react-cookie';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { BtnContainer } from 'components/Buttons';
import { PageTitle, ItemsContainer } from 'components/Categories/CatComponents';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { AddAlt16, SubtractAlt16 } from '@carbon/icons-react';
import PlannerUnsignedIn from 'containers/Modals/PlannerUnsignedIn';
import PlannerSignedIn from 'containers/Modals/PlannerSignedIn';
import { QTInput, AddBtn, SubBtn, ContentWrapper } from 'components/PrdQuantity/ProductQuantity';
import BuyModal from '../Home/TheBuyModal';

const Category = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');

  let loggedIn = cookies.get('auth_token');

  const router = useRouter();

  const [categoryItems, setCategoryItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
      params: { category: get(router, 'query.id') },
    })
      .then(res => setCategoryItems(res.data))
      .catch(err => setError(err.response));
  }, []);

  const preparedItems = {};

  const [items, setItems] = useState({});

  useEffect(() => {
    if (categoryItems.length !== 0) {
      const modified = get(categoryItems, 'data.items', []).map(obj => ({ ...obj, quantity: 1 }));

      modified.forEach(item => {
        preparedItems[item.ID] = item;
      });

      setItems(preparedItems);
    }
  }, [categoryItems]);

  const handleQtyChange = (id, qty) => {
    // you probably want to create a new object
    // instead of mutating it in place
    setItems({ ...items, [id]: { ...items[id], quantity: parseInt(qty) } });
  };

  return (
    <>
      <HomeContentWrapper>
        <PageTitle>{`ITEM CATEGORY: ${router.query.catname}`}</PageTitle>
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

export default withCookies(Category);
