import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { DefaultButton } from 'components/Buttons';
import {
  BasketEmptyState,
  BasketBody,
  ProductsWrapper,
  BasketTotal,
  ContentHeader,
  BasketSection1,
  OrderTitle,
  TotalAmount,
  RemoveBtn,
  Card,
  Section2,
} from 'components/Basket/BasketComponents';
import QuantityUpdate from 'containers/Modals/QuantityUpdate';
import Link from 'next/link';
import { removeFromCart } from 'redux/cart.slice';

const Basket = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  return (
    <HomeContentWrapper>
      {cart.length !== 0 ? (
        <>
          <Link href={`/`} passHref>
            <DefaultButton bgColor="#fff" color="#7cc719" auto>
              BACK TO HOME
            </DefaultButton>
          </Link>
          <BasketBody>
            <ProductsWrapper>
              <ContentHeader title1="DESCRIPTION" title2="QUANTITY" title3="SUBTOTAL" />
              {cart.length !== 0 ? (
                cart.map(product => (
                  <Card key={product.ID}>
                    <BasketSection1
                      img={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${product.featured_image}`}
                      description={product.product_name}
                      cost={product.local_price}
                      local_currency={product.local_currency}
                      id={product.ID}>
                      <RemoveBtn onClick={() => dispatch(removeFromCart(product.ID))}>X</RemoveBtn>
                    </BasketSection1>
                    <QuantityUpdate product={product} />
                    <Section2>
                      {product.local_currency !== ''
                        ? `${product.local_currency} ${(Number(product.local_price) * product.quantity).toLocaleString()}`
                        : `UGX ${(Number(product.local_price) * product.quantity).toLocaleString()}`}
                    </Section2>
                  </Card>
                ))
              ) : (
                <div>Basket is empty</div>
              )}
            </ProductsWrapper>
            <BasketTotal>
              <OrderTitle>BASKET TOTAL</OrderTitle>
              <TotalAmount>
                UGX{' '}
                {cart.reduce((accumulator, { local_price, quantity }) => {
                  return accumulator + quantity * local_price;
                }, 0).toLocaleString()}
              </TotalAmount>

              <Link href={`/complete-order`} passHref>
                <DefaultButton>Complete your order</DefaultButton>
              </Link>
            </BasketTotal>
          </BasketBody>
        </>
      ) : (
        <BasketEmptyState>
          <p>YOU HAVE NOT ADDED ANY ITEMS IN YOUR SHOPPING BASKET.</p>
          <Link href={`/`} passHref>
            <DefaultButton bgColor="#fff" color="#7cc719" auto>
              BACK TO HOME
            </DefaultButton>
          </Link>
        </BasketEmptyState>
      )}
    </HomeContentWrapper>
  );
};

export default Basket;
