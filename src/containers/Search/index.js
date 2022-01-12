import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { Header, PageBody, SearchFilters, SearchedResult } from 'components/Search/SearchComponents';
import { withCookies } from 'react-cookie';
import {
  ContentWrapper,
  AuthTitle,
  LoginPanel,
  Label,
  HelperText,
  InputWrapper,
  HeaderLabel,
} from 'components/Login/LoginComponents';
import { Dropdown, TextInput } from 'components/Inputs/TextInput';
import { EmptyState } from 'components/Planner/PlannerComponents';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { BtnContainer, DefaultButton } from 'components/Buttons';
import BuyModal from '../Home/TheBuyModal';
import { get } from 'lodash';
import PlannerUnsignedIn from 'containers/Modals/PlannerUnsignedIn';
import PlannerSignedIn from 'containers/Modals/PlannerSignedIn';

const SearchPage = ({ cookies }) => {
  const router = useRouter();

  const {
    query: { searchterm },
  } = router;

  let isAuthoriszed = cookies.get('access_token');
  let loggedIn = cookies.get('auth_token');

  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  const base = {
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items`,
    headers: {
      Authorization: `Bearer ${isAuthoriszed}`,
    },
    params: { search: `${searchterm}` },
  };

  useEffect(() => {
    axios({
      ...base,
    })
      .then(res => setItems(res.data))
      .catch(err => setError(err.response));
  }, []);

  useEffect(() => {
    axios({
      ...base,
    })
      .then(res => setItems(res.data))
      .catch(err => setError(err.response));
  }, [searchterm]);

  return (
    <HomeContentWrapper>
      <Header> Search results for: {searchterm} </Header>
      <PageBody>
        <SearchFilters>
          <InputWrapper>
            <Label>Location (Select Location to get the location of your desired item)</Label>
            <Dropdown value="Uganda">
              <option>Uganda</option>
            </Dropdown>
          </InputWrapper>
          <InputWrapper>
            <Label>Minimum Price in UGX</Label>
            <TextInput value="" />
          </InputWrapper>
          <InputWrapper>
            <Label>Maximum Price in UGX</Label>
            <TextInput value="" />
          </InputWrapper>
          <InputWrapper>
            <Label>Unit of measurement</Label>
            <Dropdown value="">
              <option>Select</option>
            </Dropdown>
          </InputWrapper>
          <DefaultButton>Filter</DefaultButton>
        </SearchFilters>
        <SearchedResult>
          {items && items.data.items && items.data.items.length !== 0 ? (
            get(items, 'data.items', []).map(product => (
              <ProductCard
                key={product.ID}
                productImg={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${product.featured_image}`}
                description={product.product_name}
                price={product.local_price}
                currency={product.local_currency ? product.local_currency : `UGX`}
                id={product.ID}
                searchpage>
                <BtnContainer>
                  <BuyModal product={product} />
                  {loggedIn ? <PlannerSignedIn product={product} /> : <PlannerUnsignedIn />}
                </BtnContainer>
              </ProductCard>
            ))
          ) : (
            <EmptyState>No Products found!</EmptyState>
          )}
        </SearchedResult>
      </PageBody>
    </HomeContentWrapper>
  );
};

export default withCookies(SearchPage);
