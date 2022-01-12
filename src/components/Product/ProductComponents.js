import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const ContentWrapper = styled.div.attrs({
  className: `d-flex flex-wrap justify-content-between`,
})``;

export const ProductDesdcription = styled.div.attrs({
  className: `d-flex flex-wrap`,
})`
  width: 70%;
  background: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 15px;
  border: solid 1px #ddd;
  border-radius: 4px;

  ${Media.phone`
    width:  100%;
  `}

  ${Media.tablet`
    width:  100%;
  `}

  ${Media.giant`
    width:  100%;
  `}
`;

export const ProductDetails = styled.div.attrs({
  className: `d-flex flex-wrap flex-column`,
})`
  width: 28%;
  background: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
  /* padding: 15px; */
  border: solid 1px #ddd;
  border-radius: 4px;

  ${Media.phone`
    width:  100%;
  `}

  ${Media.tablet`
    width:  100%;
  `}

  ${Media.giant`
    width:  100%;
  `}
`;

export const ProductImg = styled.img.attrs({
  className: `col-sm-12 col-md-5 p-0`,
})`
  width: 380px;
  height: 300px;

  ${Media.phone`
    width: 300px;
    height: 220px;
  `}

  ${Media.tablet`
    width: 300px;
    height: 220px;
  `}

  ${Media.giant`
    width: 300px;
    height: 220px;
  `}
`;

export const DetailsWrapper = styled.div.attrs({
  className: `col-sm-12 col-md-7`,
})`
  font-size: 14px;
`;

export const ItemTitle = styled.h2`
  font-family: ${`'Roboto'`};
  margin: 0 0 15px;
  font-size: 25px;
  font-weight: 400;
`;

export const ItemPrice = styled.h3`
  font-family: ${`'Roboto'`};
  font-size: 24px;
`;

export const ItemDesc = styled.p`
  font-family: ${`'Roboto'`};
`;

export const Stats = styled.div.attrs({
  className: `d-flex mb-3 justify-content-between`,
})``;

export const ActionBtnsWrapper = styled.div.attrs({
  className: `d-flex mb-3 justify-content-between`,
})`
  ${Media.phone`
    flex-direction: column;
  `}

  ${Media.tablet`
    flex-direction: column;
  `}

  ${Media.giant`
    flex-direction: column;
  `}
`;

export const QuantityWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  width: 70%;

  ${Media.phone`
    width:  100%;
  `}

  ${Media.tablet`
    width:  100%;
  `}

  ${Media.giant`
    width:  100%;
  `}
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    /* cursor: pointer; */
    .drop-item {
      display: block;
    }
  }
`;

export const DropButton = styled.div`
  background-color: #8ac240;
  display: flex;
  color: white;
  align-items: center;
  font-family: ${`'Roboto'`};
  border-radius: 3px;
  padding: 4px 12px;

  ${Media.phone`
    justify-content: center;
    padding: 4px;
  `}

  ${Media.tablet`
    justify-content: center;
    padding: 4px;
  `}

  ${Media.giant`
    justify-content: center;
    padding: 4px;
  `}
`;

export const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  &:hover {
    cursor: pointer;
    display: block;
  }
`;

export const TelNo = styled.a`
  color: #262626;
  /* padding: 4px 0; */
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const PhonLinkWrapper = styled.div`
  padding: 4px 0;
  text-decoration: none;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const RelatedHeading = styled.div.attrs({
  className: `d-flex text-center justify-content-center mb-2`,
})`
  font-size: 18px;
  font-weight: 700;
`;

export const Spacer = styled.div`
  ${css`
    display: none;
    ${Media.phone`
      display: flex;
      margin-top: 4px;
   `}

    ${Media.tablet`
      display: flex;
      margin-top: 4px;
   `}

    ${Media.giant`
      display: flex;
      margin-top: 4px;
    `}
  `}
`;

export const SocialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContentWrap = styled.div.attrs({
  className: `d-flex`,
})`
  ${({ even = false }) => css`
    padding: 8px 15px;
    background-color: ${even ? `#f9f9f9` : `white`};
    font-size: 14px;
    border-top: solid 1px #ddd;
  `}
`;

const Label = styled.div.attrs({
  className: `d-flex`,
})`
  width: 150px;
  font-weight: 700;
`;

export const QtyContentWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  width: 100%;
  margin: auto 0 8px 0;
`;

export const MoreInfo = ({ label, value, even }) => (
  <ContentWrap even={even}>
    <Label>{label}</Label>
    {value}
  </ContentWrap>
);

export const QuantityInputWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  width: 100%;
  margin: auto 0 8px 0;
`;
