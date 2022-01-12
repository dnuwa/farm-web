import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';
import Link from 'next/link';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;

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

const CardWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  ${({ searchpage = false }) => css`
    width: ${searchpage ? `24%` : `16%;`};
    margin: 4px;
    height: 315px;
    background: #fff;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%);

    ${Media.phone`
     width: 47%;
     height: auto;
    `}

    ${Media.tablet`
     width: 47%;
     height: auto;
    `}

  ${Media.giant`
      width: 47%;
      height: auto;
    `}
  `}
`;

const LinkWarpper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #6f6f6f;
`;

const ProductImage = styled.img`
  text-align: center;
  height: 160px;
  width: 100%;
`;

const ProductDesc = styled.p`
  font-size: 13px;
  color: #6f6f6f;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: auto 0 0 0;
`;

export const ProductCard = ({ productImg, description, price, currency, id, children, searchpage = false }) => (
  <CardWrapper searchpage={searchpage}>
    <Link href={`/product/${id}`} passHref>
      <LinkWarpper>
        <ProductImage src={productImg} />
        <ProductDesc>{description}</ProductDesc>
      </LinkWarpper>
    </Link>
    <ProductPrice>
      {currency} {price}
      {children}
    </ProductPrice>
  </CardWrapper>
);
