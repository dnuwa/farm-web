import React from 'react';
import { useRouter } from 'next/router';
import {
  ContentWrapper,
  Title,
  ContentPanel,
  Label,
  HelperText,
  OrderID,
  Note,
  Para,
} from 'components/Payment/PayementComponents';

const Payment = () => {
  const router = useRouter();

  const { orderId } = router.query;

  return (
    <ContentWrapper>
      <Title>PAYMENT FOR ORDER</Title>
      <OrderID>#{orderId}</OrderID>

      <ContentPanel>
        <HelperText>
          <Note>
            NB - Please make payment within 15 minutes after confirming your Order to ease processing within the
            Delivery
          </Note>
          <Para>
            Timeline. Please Complete your Order First, then use the details below to make a Bank Deposit/Transfer:
          </Para>
          <ul>
            <li>Account Name: FAMUNERA LIMITED</li>
            <li>Account Number: 104 220 103 3140</li>
            <li>Bank: EQUITY BANK UGANDA</li>
            <li>Swift Code: EQBLUGKAXXX</li>
            <li>Enter Your ORDER NUMBER and FULL NAMES in the Reference sections while making the Transfer/Deposit</li>
          </ul>
        </HelperText>
      </ContentPanel>
    </ContentWrapper>
  );
};

export default Payment;
