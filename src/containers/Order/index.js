import React, { useEffect, useState } from 'react';
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
  Card,
  Section2,
  OrderContent,
} from 'components/Basket/BasketComponents';
import {
  CheckoutContentWrapper,
  Section,
  InnerWrapper,
  SummeryTitle,
  SummerySubTitle,
  Title,
  ItemLabel,
  SubLabels,
  SectionHeader,
  InnerSectionWrapper,
  FormWrapper,
} from 'components/Order/Complete';
import { Purchase16 } from '@carbon/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { get } from 'lodash';

const Order = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');
  const router = useRouter();

  const { id } = router.query;

  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/orders/${id}`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
    })
      .then(res => setOrder(res.data))
      .catch(err => setError(err.response));
  }, []);

  return (
    <HomeContentWrapper>
      <BasketBody>
        <OrderContent>
          <h2>YOUR ORDER</h2>
          <ContentHeader title1="ITEM Name" title2="TOTAL" title3="QUANTITY" />
          {order &&
            order.data &&
            order.data.order.items.map(product => (
              <Card key={product.ID}>
                <BasketSection1
                  // img={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${product.product.featured_image}`}
                  description={product.product.product_name}
                  cost={product.product.local_price}
                  local_currency={product.local_currency || `UGX`}
                  id={product.product.ID}></BasketSection1>
                <Section2>{`UGX ${product.sub_total}`}</Section2>
                <Section2>{product.order_quantity}</Section2>
              </Card>
            ))}
        </OrderContent>
        <Section>
          <InnerWrapper>
            <SummeryTitle>PAYMENT DETAILS</SummeryTitle>{' '}
            <SummerySubTitle>
              <Title>Method</Title>
              <Title>{get(order, 'data.order.payment_method', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Status</Title>
              <Title>{get(order, 'data.order.order_status', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Cart Total</Title>
              <Title> UGX {get(order, 'data.order.cart_total', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Shipping Fee</Title>
              <Title> UGX {get(order, 'data.order.shipping_charge', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Service Charge</Title>
              <Title> UGX 0</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Total</Title>
              <Title>
                {' '}
                UGX{' '}
                {Number(get(order, 'data.order.shipping_charge', 0)) + Number(get(order, 'data.order.cart_total', ''))}
              </Title>
            </SummerySubTitle>
            <Link href={`/payment/${get(order, 'data.order.reference_id', '')}`}>
              <DefaultButton auto>
                {' '}
                <Purchase16 />
                Complete payment
              </DefaultButton>
            </Link>
          </InnerWrapper>

          <InnerWrapper>
            <SummeryTitle>DELIVERY INFORMATION</SummeryTitle>{' '}
            <SummerySubTitle>
              <Title>Delivery Status</Title>
              <Title>{get(order, 'data.order.order_status', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Name</Title>
              <Title>{get(order, 'data.order.name', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Phone</Title>
              <Title> {get(order, 'data.order.phone', '')}</Title>
            </SummerySubTitle>
            <SummerySubTitle>
              <Title>Delivery Address</Title>
              <Title> {get(order, 'data.order.address', '')}</Title>
            </SummerySubTitle>
          </InnerWrapper>
        </Section>
      </BasketBody>
    </HomeContentWrapper>
  );
};

export default withCookies(Order);
