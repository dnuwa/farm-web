import styled from 'styled-components';
import Link from 'next/link';
import { Media } from 'utils/theme';

export const BasketEmptyState = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  text-align: center;
  font-weight: bold;
  color: #333;
  font-family: ${`'Roboto'`};
`;

export const BasketBody = styled.div.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};

  ${Media.phone`
      flex-wrap: wrap;
    `}

  ${Media.tablet`
      flex-wrap: wrap;
    `}

  ${Media.giant`
    flex-wrap: wrap;
  `}
`;

export const ProductsWrapper = styled.div.attrs({
  className: `col-sm-12 col-md-9 col-lg-9 m-3`,
})`
  border-width: 1px;
  border-style: solid;
  padding: 15px;
  background-color: #ffffff;
  border-color: #dddddd;
  border-radius: 4px;
  font-family: ${`'Roboto'`};
`;

const Wrapper = styled.div.attrs({
  className: `d-flex`,
})`
  color: #6d6c6c;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  border-bottom: solid 2px #dbd8d8;

  ${Media.phone`
      display: none !important;
    `}

  ${Media.tablet`
      display: none !important;
    `}
`;

export const Section1 = styled.div.attrs({
  className: `col-8 d-flex`,
})`
  font-family: ${`'Roboto'`};
`;

export const Section2 = styled.div.attrs({
  className: `col-2 flex flex-wrap`,
})`
  text-align: right;
  justify-content: center;
  margin: auto;
  font-family: ${`'Roboto'`};
`;

export const QuantityUpdate = styled.button`
  text-align: right;
  justify-content: center;
  margin: auto;
  font-family: ${`'Roboto'`};
  width: 5.9em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

export const ContentHeader = ({ title1, title2, title3 }) => (
  <Wrapper>
    <Section1>{title1}</Section1>
    <Section2>{title2}</Section2>
    <Section2>{title3}</Section2>
  </Wrapper>
);

export const Card = styled.div.attrs({
  className: `d-flex flex-wrap p-4`,
})`
  font-size: 12px;
  color: #6d6c6c;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: solid 1px #dbd8d8;
  font-family: ${`'Roboto'`};

  ${Media.phone`
    width: 100%;
  `}
`;

const Image = styled.img`
  width: 100px;
  height: 100px;

  ${Media.phone`
    display: none;
  `}
`;

const Description = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  padding: 12px;
  justify-content: center;
  font-family: ${`'Roboto'`};
`;

const PdtCost = styled.div`
  font-family: ${`'Roboto'`};
  font-weight: 700;
`;

const NameLink = styled.span`
  font-size: 14px;
  color: #23527c;
  font-family: ${`'Roboto'`};
  cursor: pointer;
`;

export const BasketSection1 = ({ img, description, cost, local_currency, id, children }) => (
  <Section1>
    {children}
    <Image src={img} />
    <Description>
      <Link href={`/product/${id}`} passHref>
        <NameLink>{description}</NameLink>
      </Link>
      <PdtCost>{local_currency !== '' ? `${local_currency} ${cost}` : `UGX ${cost}`}</PdtCost>
    </Description>
  </Section1>
);

export const BasketTotal = styled.div.attrs({
  className: `col-sm-12 col-md-3 col-lg-3 m-3`,
})`
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  background-color: #ffffff;
  border-color: #dddddd;
  border-radius: 4px;
  max-height: 155px;
  font-family: ${`'Roboto'`};
`;

export const OrderTitle = styled.div`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  color: #8ac240;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 15px;
`;

export const TotalAmount = styled.p`
  /* padding:16px; */
  font-family: ${`'Roboto'`};
  font-weight: 700;
`;

export const RemoveBtn = styled.button`
  margin: auto 6px auto 0;
  cursor: pointer;
`;

export const OrderContent = styled.div.attrs({
  className: `col-sm-12 col-md-8 col-lg-8 mt-0`,
})`
  border-width: 1px;
  border-style: solid;
  padding: 15px;
  background-color: #ffffff;
  border-color: #dddddd;
  border-radius: 4px;
  font-family: ${`'Roboto'`};
  margin-right: 24px;

  ${Media.phone`
    margin: 0;
  `}
`;
