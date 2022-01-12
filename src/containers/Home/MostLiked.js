import React, { useState } from 'react';

import { get } from 'lodash';
import { withCookies } from 'react-cookie';
import { SectionHeader, SectionHeading } from 'components/Home/HomeComponents';
import { ProductsContainer, ProductCard } from 'components/ProductCard/ProductCard';
import { CaretRight24 } from '@carbon/icons-react';
import { BtnContainer, PlanButton } from 'components/Buttons';
import PlannerUnsignedIn from 'containers/Modals/PlannerUnsignedIn';
import PlannerSignedIn from 'containers/Modals/PlannerSignedIn';
import Link from 'next/link';
import BuyModal from './TheBuyModal';
import { AddAlt16, SubtractAlt16 } from '@carbon/icons-react';
import { QTInput, AddBtn, SubBtn, ContentWrapper } from 'components/PrdQuantity/ProductQuantity';

const MostLiked = ({ cookies, most_liked }) => {
  let loggedIn = cookies.get('auth_token');

  //add quantity to each item
  const modified = get(most_liked, 'data.items', []).map(obj => ({ ...obj, quantity: 1 }));

  const preparedItems = {};

  modified.forEach(item => {
    preparedItems[item.ID] = item;
  });

  const [items, setItems] = useState(preparedItems);

  const handleQtyChange = (id, qty) => {
    // you probably want to create a new object
    // instead of mutating it in place
    setItems({ ...items, [id]: { ...items[id], quantity: parseInt(qty) } });
  };


  return (
    <>
      <SectionHeader>
        <SectionHeading>MOST LIKED</SectionHeading>
        <Link href={`/products/most-liked`}>
          <SectionHeading>
            See All <CaretRight24 />
          </SectionHeading>
        </Link>
      </SectionHeader>
      <ProductsContainer>
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
      </ProductsContainer>
    </>
  );
};

export default withCookies(MostLiked);
