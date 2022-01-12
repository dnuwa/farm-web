import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import { useCookies } from 'react-cookie';
import {
  SectionWrapper,
  CarouselContainer,
  SideSection,
  EmptyState,
  CategoriesList,
  Category,
  OfferCard,
  PromoTite,
  PromoWrapper,
  Prices,
  LocalPrice,
  UnitPrice,
  PromoDates,
  CompanyName,
  PromoCard,
  PromosEmptyState,
} from 'components/Home/Banner';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { DefaultButton } from 'components/Buttons';
import { Carousel } from 'react-responsive-carousel';
import date from 'date-and-time';
import Link from 'next/link';
import CatalogMagic from './CatalogMagic';

const BannerSection = ({ categories, banners, promotions }) => {
  const [cookie, setCookie] = useCookies(['access_token']);
  const [state, setstate] = useState(false);
  //Todo {error management}
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: `${process.env.NEXT_PUBLIC_PARTNER_API}/auth/token`,
  //     headers: {
  //       clientId: `5sTvsLjd3edGQbpTfJ5YGk0Gs1UDSsQf`,
  //       clientSecret: `JCSQNZ0xKgr-U2OUeewlgTrGpuntXJna90OortwEgTdZ_vjk8QS_qAuylGfGEUAp`,
  //     },
  //   })
  //     .then(
  //       res =>
  //         //set access cookie
  //         setCookie('access_token', JSON.stringify(res.data.token), {
  //           path: '/',
  //           sameSite: true,
  //         }),
  //       setstate(true)
  //     )
  //     .catch(err => console.error('expired-access-coockie', err.response));
  // }, []);

  const truncate = (str, max, suffix) =>
    str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

  return categories.length !== 0 && banners.length !== 0 && categories.length !== 0 ? (
    <SectionWrapper>
      <SideSection>
        <CategoriesList>
          {get(categories, 'data.categories', []).map(cat => (
            <Category key={cat.ID} cat={cat.name} subcategories={cat.sub_categories} />
          ))}
        </CategoriesList>
      </SideSection>
      <CarouselContainer>
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={4000}>
          {get(banners, 'data.items', []).map(({ ad_file }) => (
            <div key={ad_file}>
              <img src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${ad_file}`} />
            </div>
          ))}
        </Carousel>
      </CarouselContainer>
      <SideSection>
        {get(promotions, 'data.items', []).length !== 0 ? (
          <PromoWrapper>
            {get(promotions, 'data.items', []).map(({ product, unit_price, start_date, end_date }) => (
              <PromoCard key={product.ID}>
                <Link href={`/product/${product.ID}`}>
                  <PromoTite>{truncate(product.product_name, 40, '...')}</PromoTite>
                </Link>
                <Prices>
                  <LocalPrice>{`UGX ${Number(product.local_price).toLocaleString()}`}</LocalPrice>
                  <UnitPrice>{`UGX ${Number(unit_price).toLocaleString()}`}</UnitPrice>
                </Prices>
                <PromoDates>
                  from {date.format(new Date(start_date), 'MMMM DD')} to {date.format(new Date(end_date), 'MMMM DD')}
                </PromoDates>
                <CompanyName>Famnera Ltd</CompanyName>
              </PromoCard>
            ))}
            <Link href={`/promotions`}>
              <DefaultButton>See All Promotions</DefaultButton>
            </Link>
          </PromoWrapper>
        ) : (
          <PromosEmptyState>There are currently no promotions</PromosEmptyState>
        )}
      </SideSection>
    </SectionWrapper>
  ) : (
    <CatalogMagic />
  );
};

export default BannerSection;
