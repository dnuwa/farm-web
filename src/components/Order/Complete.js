import styled from 'styled-components';
import { Media } from 'utils/theme';

export const CheckoutContentWrapper = styled.div.attrs({
  className: `d-flex justify-content-between mb-3`,
})``;

export const Section = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  width: 48%;

  ${Media.phone`
    width: 100%
  `}
`;

export const InnerWrapper = styled.div.attrs({
  className: `d-flex flex-column mb-3`,
})`
  background: #ffffff;
  padding: 15px;
  border: solid 1px #ddd;
  border-radius: 4px;
`;

export const SummeryTitle = styled.div.attrs({
  className: `d-flex`,
})`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  margin: 0 0 10px;
`;

export const SummerySubTitle = styled.div.attrs({
  className: `d-flex justify-content-between`,
})`
  border-bottom: solid 1px #eeeded;
  margin: 0 0 10px;
`;

export const Title = styled.div.attrs({
  className: `d-flex`,
})`
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  padding: 7px 0;
`;

export const ItemLabel = styled.p`
  font-size: 13px;
  padding: 0;
`;

export const SubLabels = styled.div.attrs({
  className: `d-flex justify-content-between`,
})``;

export const InnerSectionWrapper = styled.div.attrs({
  className: `d-flex flex-column mb-3`,
})`
  background: #ffffff;
  /* padding: 15px; */
  border: solid 1px #ddd;
  border-radius: 4px;
`;

const HeaderContainer = styled.div.attrs({
  className: `d-flex`,
})`
  color: #333;
  background-color: #f5f5f5;
  border-bottom: solid 1px #ddd;
  font-size: 16px;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
`;

export const SectionHeader = ({ lable }) => <HeaderContainer>{lable}</HeaderContainer>;

export const FormWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  padding: 15px;
`;

export const AccountTextWrap = styled.div`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
`;
export const TopUpLink = styled.button`
  color: #fff !important;
  background-color: #8ac240;
  border: transparent;
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;

  &:hover{
    cursor: pointer;
  }
`;

export const DFlex = styled.div`
  display: flex;
`;
