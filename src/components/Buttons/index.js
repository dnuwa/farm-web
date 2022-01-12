import styled, { css } from 'styled-components';
import { ShoppingCart16, Report16, AccumulationIce16 } from '@carbon/icons-react';
import { Media } from 'utils/theme';

export const BtnContainer = styled.div.attrs({
  className: `d-flex`,
})`
  width: 100%;
  font-family: ${`'Roboto'`};
`;

const BtnWrapper = styled.button.attrs({
  className: `d-flex flex-wrap`,
})`
  ${({ auto }) => css`
    color: #fff;
    background-color: #f0ad4e;
    border: 1px solid #eea236;
    border-radius: ${auto ? `3px` : `3px 0 0 3px`};
    font-weight: 400;
    cursor: pointer;
    padding: 5px 10px;
    width: ${auto ? `auto` : `50%`};
    justify-content: center;
    font-family: ${`'Roboto'`};
    > svg {
      margin: 0 4px 0 0;
    }
  `}
`;

export const BuyButton = ({ label, action }) => (
  <BtnWrapper onClick={action}>
    <ShoppingCart16 />
    {label}
  </BtnWrapper>
);

const PdtBtnWrapper = styled.button.attrs({
  className: `d-flex flex-wrap`,
})`
  ${() => css`
    color: #fff;
    background-color: #f0ad4e;
    border: 1px solid #eea236;
    border-radius: ${`3px`};
    font-weight: 400;
    cursor: pointer;
    padding: 5px 10px;
    width: auto;
    justify-content: center;
    font-family: ${`'Roboto'`};
    > svg {
      margin: 0 4px 0 0;
    }
  `}
`;

export const ProductBuyButton = ({ label, action }) => (
  <PdtBtnWrapper onClick={action}>
    <ShoppingCart16 />
    {label}
  </PdtBtnWrapper>
);

const PlanBtnWrapper = styled.button.attrs({
  className: `d-flex flex-wrap`,
})`
  ${({ auto }) => css`
    color: #fff;
    background-color: #8ac240;
    border: 1px solid #8ac240;
    border-radius: ${auto ? `3px` : `0 3px 3px 0`};
    font-weight: 400;
    cursor: pointer;
    padding: 5px 10px;
    width: 50%;
    justify-content: center;
    font-family: ${`'Roboto'`};
    > svg {
      margin: 0 4px 0 0;
    }
  `}
`;

export const PlanButton = ({ action }) => (
  <PlanBtnWrapper onClick={action}>
    <Report16 />
    Plan
  </PlanBtnWrapper>
);

const ProductPlanBtnWrapper = styled.button.attrs({
  className: `d-flex flex-wrap`,
})`
  ${() => css`
    color: #fff;
    background-color: #8ac240;
    border: 1px solid #8ac240;
    border-radius: 3px;
    font-weight: 400;
    cursor: pointer;
    padding: 5px 10px;
    width: auto;
    justify-content: center;
    font-family: ${`'Roboto'`};
    > svg {
      margin: 0 4px 0 0;
    }
  `}
`;

export const ProductPlanButton = ({ action }) => (
  <ProductPlanBtnWrapper onClick={action}>
    <Report16 />
    Plan
  </ProductPlanBtnWrapper>
);

export const DefaultButton = styled.button.attrs({
  className: `d-flex`,
})`
  ${({ auto = false, border = false, managed = false }) => css`
    width: ${auto ? `auto` : `100%`};
    background-color: ${({ bgColor = '#8ac240' }) => bgColor};
    text-align: center;
    justify-content: center;
    /* border: transparent; */
    color: ${({ color = 'white' }) => color};
    padding: ${auto ? `6px 12px` : `10px`};
    font-size: 14px;
    border-radius: 4px;
    margin: ${auto ? `0 auto` : managed ? `0 2px` : `0`};
    border: ${border ? `solid 1px #ddd` : `transparent`};
    font-family: ${`'Roboto'`};

    &:hover {
      cursor: pointer;
    }

    > svg {
      margin: 0 4px;
    }
  `}
`;

export const LinkButton = styled.a.attrs({
  className: `d-flex`,
})`
  ${() => css`
    margin: 12px;
    background-color: ${({ bgColor = '#8ac240' }) => bgColor};
    text-align: center;
    justify-content: center;
    color: white;
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 4px;
    text-decoration: none;
    font-family: ${`'Roboto'`};

    &:hover {
      cursor: pointer;
    }
  `}
`;

export const LightButton = styled.button.attrs({
  className: `d-flex`,
})`
  ${() => css`
    margin: 2px auto;
    width: 96%;
    background-color: transparent;
    text-align: center;
    color: #333439;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 4px;
    text-decoration: none;
    border: transparent;
    font-family: ${`'Roboto'`};
    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
      color: #8ac240;
    }
  `}
`;

const BtWrap = styled.button.attrs({
  className: `d-flex flex-wrap`,
})`
  color: #333;
  background-color: white;
  border: transparent;
  font-weight: 400;
  cursor: pointer;
  padding: 5px 10px;
  width: 50%;
  justify-content: center;
  font-family: ${`'Roboto'`};
  > svg {
    margin: 0 4px 0 0;
  }
`;

const Value = styled.div.attrs({
  className: `pr-1`,
})``;

export const ExtraButton = ({ label, action, intval, icon = false }) => (
  <BtWrap onClick={action}>
    {icon}
    <Value>{intval}</Value>
    {label}
  </BtWrap>
);

export const PrimaryBtn = styled.button.attrs({
  className: `d-flex`,
})`
  color: #fff;
  background-color: #337ab7;
  border: solid 1px #2e6da4;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
`;

export const DefaultBtn = styled.button.attrs({
  className: `d-flex`,
})`
  color: #333;
  background-color: #fff;
  border: solid 1px #ccc;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  margin: 0 8px;
`;

export const ModalBtnsWrapper = styled.div.attrs({
  className: `d-flex flex-row-reverse`,
})``;

const ProBtnWrapper = styled.button.attrs({
  className: `d-flex flex-wrap`,
})`
  ${({ auto }) => css`
    color: #fff;
    background-color: #8ac240;
    border: 1px solid #8ac240;
    border-radius: ${auto ? `3px` : `0 3px 3px 0`};
    font-weight: 400;
    cursor: pointer;
    padding: 5px 10px;
    /* width: 50%; */
    justify-content: center;
    font-family: ${`'Roboto'`};
    > svg {
      margin: 0 4px 0 0;
    }
  `}
`;

export const PromoButton = ({ action }) => (
  <ProBtnWrapper onClick={action}>
    <Report16 />
    Add Promotion
  </ProBtnWrapper>
);
