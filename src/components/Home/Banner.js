import styled from 'styled-components';
import { Media } from 'utils/theme';
import { CaretRight16 } from '@carbon/icons-react';
import Link from 'next/link';

export const SectionWrapper = styled.div.attrs({
  className: `d-flex flex-wrap`,
})`
  font-family: ${`'Roboto'`};

  ${Media.phone`
      display: none !important;

    `}

  ${Media.tablet`
      display: none !important;

    `}

  ${Media.giant`
    display: none !important;
  `}
`;

export const CarouselContainer = styled.div.attrs({
  className: `col-7`,
})``;

export const SideSection = styled.div.attrs({
  className: `col-sm p-0`,
})`
  background-color: white;
  border-radius: 3px;
`;

export const EmptyState = styled.p`
  font-family: ${`'Roboto'`};
  background-color: #fcf8e3;
  color: #8a6d3b;
  padding: 16px;
  margin: 0 0 2px 0;
`;

export const CategoriesList = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  padding: 0 4px;
`;

export const ListItemWrapper = styled.div.attrs({
  className: `d-flex justify-content-between`,
})`
  border-bottom: solid 1px #eeeded;
  padding: 6px 10px;
  color: #333;
  font-family: ${`'Roboto'`};

  .sub-category {
    padding: 0 4px;
    border-left: solid 1px #eeeded;
    position: absolute;
    left: 70%;
    top: 0;
    width: 232px;
    z-index: 2;
    background-color: white;
    height: 100%;
    display: none;
  }

  &:hover {
    /* cursor: pointer; */
    /* transition: right 1s; */

    .sub-category {
      cursor: pointer;
      display: block;
    }
  }
`;

const CatLable = styled.p`
  margin: 0;
  padding: 0 8px;
`;

export const SubCategories = styled.div.attrs({
  className: `col-sm`,
})`
  font-family: ${`'Roboto'`};
  padding: 4px;
`;

const SubCatHeading = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-family: ${`'Roboto'`};
`;

const SubCat = styled.li.attrs({
  className: `d-flex justify-content-between`,
})`
  border-bottom: solid 1px #eeeded;
  color: #333;
  padding: 4px 8px;

  &:hover {
    cursor: pointer;
    color: #8ac240;
  }
`;

export const Category = ({ cat, subcategories = [] }) => (
  <ListItemWrapper>
    <CatLable>{cat}</CatLable>
    <CaretRight16 />
    <div className={`sub-category`}>
      <SubCategories>
        <SubCatHeading>{cat}</SubCatHeading>
        {subcategories ? (
          subcategories.map(({ name, ID }) => (
            <Link href={`/category/${ID}/${name}`} key={ID}>
              <SubCat>{name}</SubCat>
            </Link>
          ))
        ) : (
          <></>
        )}
      </SubCategories>
    </div>
  </ListItemWrapper>
);

const ContentWrapper = styled.div`
  display: flex;
  background-color: #fcf8e3;
  color: #8a6d3b;
  padding: 16px;
  margin-bottom: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const OfferImg = styled.img`
  width: 35%;
  height: 50px;
`;

const OfferTitle = styled.p`
  background-color: #fcf8e3;
  color: #8a6d3b;
  padding: 0px 0px 2px 8px;
  margin: 0;
  font-family: ${`'Roboto'`};
`;

const OfferDec = styled.p`
  background-color: #fcf8e3;
  color: #8a6d3b;
  padding: 0px 0px 2px 8px;
  margin: 0;
  font-size: 10px;
  font-family: ${`'Roboto'`};
`;

const OfferTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfferCard = ({ title, description, image, price }) => (
  <ContentWrapper>
    <OfferImg src={image} />
    <OfferTxtWrapper>
      <OfferTitle>{title}</OfferTitle>
      <OfferDec>{description}</OfferDec>
      <OfferDec>{price}</OfferDec>
    </OfferTxtWrapper>
  </ContentWrapper>
);

export const PromoWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  padding: 8px;
`;

export const PromoTite = styled.div`
  color: #337ab7;
  font-size: 14px;
  font-weight: 600;
  /* padding: 2px; */
  cursor: pointer;
`;

export const Prices = styled.div`
  display: flex;
`;
export const LocalPrice = styled.div`
  color: #2f5003;
  text-decoration: line-through;
  padding-right: 8px;
  font-size: 13px;
`;

export const UnitPrice = styled.div`
  color: #2f5003;
  font-size: 13px;
`;

export const PromoDates = styled.div`
  color: #7b7575;
  font-size: 13px;
`;
export const CompanyName = styled.div`
  font-weight: 400;
  color: #333;
  font-size: 13px;
  padding: 0 0 4px 0;
`;

export const PromoCard = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #eeeded;
  margin: 0 0 4px 0;
`;

export const PromosEmptyState = styled.div`
  color: #8a6d3b;
  background-color: #fcf8e3;
  border: 1px solid #faebcc;
  padding: 15px;
  font-family: ${`'Roboto'`};
  font-size: 16px !important;
`;
