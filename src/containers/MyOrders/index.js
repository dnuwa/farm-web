import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import { get } from 'lodash';
import date from 'date-and-time';
import {
  Panel,
  PanelHeading,
  HeaderLable,
  SectionContentWrapper,
  TableContentBB,
  DataContent,
} from 'components/Planner/PlannerComponents';
import { DefaultButton } from 'components/Buttons';
import Link from 'next/link';

const MyOrders = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  let loggedIn = cookies.get('auth_token');

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/orders/users/${parseInt(loggedIn.data.user.ID)}`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
    })
      .then(res => setOrders(res.data))
      .catch(err => setError(err.response));
  }, []);

  // console.log('orders ---', orders);

  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>My Orders</HeaderLable>
      </PanelHeading>
      <SectionContentWrapper>
        <TableContentBB>#No</TableContentBB>
        <TableContentBB>Total</TableContentBB>
        <TableContentBB>Payment Method</TableContentBB>
        <TableContentBB>Created</TableContentBB>
        <TableContentBB>Delivery Status</TableContentBB>
        <TableContentBB>Payment Status</TableContentBB>
        <TableContentBB />
      </SectionContentWrapper>
      <>
        {orders !== null ? (
          get(orders, 'data.orders').map(data => (
            <SectionContentWrapper key={data.reference_id}>
              <DataContent>{get(data, 'reference_id', '')}</DataContent>
              <DataContent>{get(data, 'cart_total', '')}</DataContent>
              <DataContent>{get(data, 'payment_method', '')}</DataContent>
              <DataContent>{date.format(new Date(data.order_date), 'YYYY/MM/DD HH:mm')}</DataContent>
              <DataContent>{get(data, 'order_status', '')}</DataContent>
              <DataContent>{get(data, 'payment_status', '')}</DataContent>
              <DataContent>
                <Link href={`/order/${data.order_id}`} passHref>
                  <DefaultButton auto>View</DefaultButton>
                </Link>
              </DataContent>
            </SectionContentWrapper>
          ))
        ) : (
          <></>
        )}
      </>
    </Panel>
  );
};

MyOrders.layout = 'planner';
export default withCookies(MyOrders);
