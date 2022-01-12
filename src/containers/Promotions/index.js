import React, { useEffect, useState } from 'react';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { EmptyState } from 'components/Planner/PlannerComponents';
import { HeaderLable } from 'components/Planner/PlannerComponents';
import { ProductsContainer, ProductCard } from 'components/ProductCard/ProductCard';
import { BtnContainer, PlanButton } from 'components/Buttons';
import PlannerSignedIn from 'containers/Modals/PlannerSignedIn';
import PlannerUnsignedIn from 'containers/Modals/PlannerUnsignedIn';
import BuyModal from '../Home/TheBuyModal';
import { withCookies } from 'react-cookie';
import { get } from 'lodash';
import axios from 'axios';

const Promotions = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');
  let loggedIn = cookies.get('auth_token');
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/promotions`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
    })
      .then(res => setPromotions(res.data))
      .catch(err => console.error('promo_error--', err.response));
  }, []);

  return (
    <HomeContentWrapper>
      <HeaderLable size="14px" mb="5px">
        PROMOTIONS
      </HeaderLable>
      {promotions && get(promotions, 'data.items', []).length !== 0 ? (
        <ProductsContainer>
          {get(promotions, 'data.items', []).map(product => (
            <ProductCard
              key={product.product.ID}
              productImg={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${product.product.featured_image}`}
              description={product.product.product_name}
              price={product.unit_price}
              currency={product.local_currency ? product.local_currency : `UGX`}
              id={product.product.ID}>
              <BtnContainer>
                {/* displays a modal on click */}
                <BuyModal product={product.product} />
                {loggedIn ? <PlannerSignedIn product={product} /> : <PlannerUnsignedIn />}
              </BtnContainer>
            </ProductCard>
          ))}
        </ProductsContainer>
      ) : (
        <EmptyState>No items found!</EmptyState>
      )}
    </HomeContentWrapper>
  );
};

export default withCookies(Promotions);
