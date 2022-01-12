import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

const SuccessWrapper = styled.div`
  background-color: #fcf8e3;
  border: solid 1px #faebcc;
  font-family: ${`'Roboto'`};
  border-radius: 4px;
  padding: 15px;
  margin: 8px 0;
  width: 50%;
  margin: 20px auto 300px;

  ${Media.phone`
      width: 90%;
    `}

  ${Media.tablet`
      width: 90%;
    `}

  ${Media.giant`
    width: 90%;
  `}
`;

const TextWrap = styled.div`
  color: #8a6d3b;
  font-family: ${`'Roboto'`};
`;

const LabelWrap = styled.span`
  color: #3c763d;
  font-weight: 700;
  font-family: ${`'Roboto'`};
`;

export const ResetSuccess = ({ label }) => (
  <SuccessWrapper>
    <TextWrap>
      An email with a reset link has been sent to your mailbox <LabelWrap>{label}</LabelWrap>
    </TextWrap>
    <TextWrap>Please check your email box and reset your password</TextWrap>
  </SuccessWrapper>
);
