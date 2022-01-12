import React, { useState, useEffect, useRef } from 'react';
import { withCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import useOnClickOutside from 'utils/hooks/useOnClickOutside';
import {
  ParentHeaderComponent,
  HeaderContainer,
  HeaderWrapper,
  SiteLogo,
  PartnerSiteLogo,
  HeaderLinksWrapper,
  HeaderLink,
  SearchContainer,
  ServiceSelect,
  SearchInput,
  SearchButton,
  LowerHeader,
  UserAccountSection,
  AccountDropButton,
  IconText,
  MobileMenu,
  MobileMenuContent,
  NavLink,
  SectionHeader,
  Close,
  CategoryTitle,
  SubCategory,
  SearchTablet,
} from 'components/Header/HeaderComponents';

import { DropDownContainer, DropDownListContainer, DropDownList } from 'components/ProfileSelect/SelectComponents';
import { LinkButton, LightButton } from 'components/Buttons';
import { Search16, User24, ShoppingBag24, CaretDown24, Store24, Menu24, CloseOutline24 } from '@carbon/icons-react';
import Link from 'next/link';
import { get } from 'lodash';
import { clearCart } from 'redux/cart.slice';

const Header = ({ cookies }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenright, setIsOpenright] = useState(false);
  const [isOpenleft, setIsOpenleft] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  let loggedIn = cookies.get('auth_token');

  const items = useSelector(state => state.cart);

  const dispatch = useDispatch();

  let initialState = {
    search: '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  const onSearch = (e) =>{
    e.preventDefault();
    router.push(`/search/${formValues.search}`);
    onChangeValue('');
  }

  return (
    <ParentHeaderComponent>
      <HeaderContainer>
        <HeaderWrapper>
          <MobileMenu
            onClick={() => {
              setIsOpenleft(true);
              setIsOpenright(false);
            }}>
            <Menu24 />
          </MobileMenu>
          <SiteLogo src="/images/famunera_logo.png" />
          {/* <PartnerSiteLogo src="https://www.newvision.co.ug/_nuxt/img/logo_white.56a914b.svg" /> */}
          <MobileMenu
            right
            onClick={() => {
              setIsOpenright(true);
              setIsOpenleft(false);
            }}>
            <Menu24 />
          </MobileMenu>
      
          <MobileMenuContent right open={isOpenright}>
            <Close
              right
              onClick={() => {
                setIsOpenright(false);
              }}>
              <CloseOutline24 />
            </Close>
            <Link href={`/`} passHref>
              <NavLink>HOME</NavLink>
            </Link>
            <Link href={`/planner`} passHref>
              <NavLink>PLANNER</NavLink>
            </Link>
            <Link href={`/promotions`} passHref>
              <NavLink>PROMOTIONS</NavLink>
            </Link>
            <Link href={`/my-products`} passHref>
              <NavLink>SELL PRODUCT</NavLink>
            </Link>
            <Link href={`/my-services`} passHref>
              <NavLink>SELL SERVICE</NavLink>
            </Link>
            <Link href={`/guides`} passHref>
              <NavLink>GUIDES</NavLink>
            </Link>
            <Link href={`/blogs`} passHref>
              <NavLink>BLOGS</NavLink>
            </Link>
      
            <SectionHeader>My Account</SectionHeader>
            <Link href={`/profile`} passHref>
              <NavLink>Profile</NavLink>
            </Link>
            <Link href={`/notifications`} passHref>
              <NavLink>Notifications</NavLink>
            </Link>
            <Link href={`/planner`} passHref>
              <NavLink>Planner</NavLink>
            </Link>
            <Link href={`/my-orders`} passHref>
              <NavLink>Sent Orders</NavLink>
            </Link>
            {/* <Link href={`/my-quotations`} passHref>
              <NavLink>Sent Quotations</NavLink>
            </Link> */}
            <Link href={`/logout`} passHref>
              <NavLink>Logout</NavLink>
            </Link>
          </MobileMenuContent>
      
          {/* left    */}
          <MobileMenuContent open={isOpenleft}>
            <Close
              onClick={() => {
                setIsOpenleft(false);
              }}>
              <CloseOutline24 />
            </Close>
            <SectionHeader>CATEGORIES</SectionHeader>
            <CategoryTitle>Agro inputs</CategoryTitle>
            <SubCategory>
              {[
                'Seeds',
                'Herbicides',
                'Fertilizers',
                'Pesticides',
                'Fungicides',
                'Farm Equipment',
                'Irrigation Systems',
                'Animal Supplements',
                'Other Agro Inputs',
              ].map(cat => (
                <Link href={`/${cat}`} passHref key={cat.split(" ").join("-")}>
                  <NavLink>{cat}</NavLink>
                </Link>
              ))}
            </SubCategory>
            <CategoryTitle>Agro insurance</CategoryTitle>
            <SubCategory>
              {['Crop Insurance'].map(cat => (
                <Link href={`/${cat}`} passHref key={cat.split(" ").join("-")}>
                  <NavLink>{cat}</NavLink>
                </Link>
              ))}
            </SubCategory>
            <CategoryTitle>Extension services</CategoryTitle>
            <SubCategory>
              {['Tractor Hire', 'Soil Testing', 'Repair & Maintenance/Installation'].map(cat => (
                <Link href={`/${cat}`} passHref key={cat.split(" ").join("-")}>
                  <NavLink>{cat}</NavLink>
                </Link>
              ))}
            </SubCategory>
            <CategoryTitle>Agro produce</CategoryTitle>
            <SubCategory>
              {['Plant Produce', 'Animal Produce'].map(cat => (
                <Link href={`/${cat}`} passHref key={cat.split(" ").join("-")}>
                  <NavLink>{cat}</NavLink>
                </Link>
              ))}
            </SubCategory>
            <CategoryTitle>Modal farms</CategoryTitle>
            <SubCategory>
              {['Crop Model Farms', 'Livestock Model Farms'].map(cat => (
                <Link href={`/${cat}`} passHref key={cat.split(" ").join("-")}>
                  <NavLink>{cat}</NavLink>
                </Link>
              ))}
            </SubCategory>
          </MobileMenuContent>
      
          <HeaderLinksWrapper>
            <Link href={`/`} passHref>
              <HeaderLink>HOME</HeaderLink>
            </Link>
            <Link href={`/planner`} passHref>
              <HeaderLink>PLANNER</HeaderLink>
            </Link>
            <Link href={`/promotions`} passHref>
              <HeaderLink>PROMOTIONS</HeaderLink>
            </Link>
            <Link href={`/my-products`} passHref>
              <HeaderLink>SELL PRODUCT</HeaderLink>
            </Link>
            <Link href={`/my-services`} passHref>
              <HeaderLink>SELL SERVICE</HeaderLink>
            </Link>
            <Link href={`/guides`} passHref>
              <HeaderLink>GUIDES</HeaderLink>
            </Link>
            <Link href={`/blogs`} passHref>
              <HeaderLink>BLOGS</HeaderLink>
            </Link>
          </HeaderLinksWrapper>
        </HeaderWrapper>
        <LowerHeader>
          <SearchContainer>
            <ServiceSelect>
              <option>Products / Services</option>
              <option>Activate ingredients</option>
              <option>Supplier name</option>
            </ServiceSelect>
            <SearchInput
              placeholder="What are you looking for ?"
              value={formValues.search}
              onChangeValue={d => onChangeValue({ ...formValues, search: d })}
            />
      
            {!router.route.includes("/search") ? (
              <Link href={`/search/${formValues.search}`} passHref>
                <SearchButton>
                  <Search16 />
                  SEARCH
                </SearchButton>
              </Link>
            ) : (
              <SearchButton onClick={onSearch}>
                <Search16 />
                SEARCH
              </SearchButton>
            )}
          </SearchContainer>
          <UserAccountSection>
            {/* not loggedin view */}
            {/* <DropDownContainer>
              <AccountDropButton onClick={() => setIsOpen('account')}>
                <User24 />
                <IconText>Account</IconText>
                <CaretDown24 />
              </AccountDropButton>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    <Link href={`/login`} passHref>
                      <LinkButton>Login</LinkButton>
                    </Link>
                    <Link href={`/register`} passHref>
                      <LinkButton>Register</LinkButton>
                    </Link>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer> */}
      
            {/* when loggedIn  */}
            {get(loggedIn, 'data.token', false) ? (
              <DropDownContainer>
                <AccountDropButton onClick={() => setIsOpen('account')}>
                  <User24 />
                  <IconText>Account</IconText>
                  <CaretDown24 />
                </AccountDropButton>
                {isOpen === 'account' && (
                  <DropDownListContainer ref={ref}>
                    <DropDownList>
                      <Link href={`/profile`} passHref>
                        <LightButton>Profile</LightButton>
                      </Link>
                      <Link href={`/notifications`} passHref>
                        <LightButton>Notifications</LightButton>
                      </Link>
                      <Link href={`/planner`} passHref>
                        <LightButton>Planner</LightButton>
                      </Link>
                      <Link href={`/my-orders`} passHref>
                        <LightButton>Sent Orders</LightButton>
                      </Link>
                      {/* <Link href={`/my-quotations`} passHref>
                        <LightButton>Sent Quotations</LightButton>
                      </Link> */}
                      <LightButton
                        onClick={() => {
                          dispatch(clearCart());
                          cookies.remove('auth_token');
                          router.push('/');
                        }}>
                        Logout
                      </LightButton>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            ) : (
              <DropDownContainer>
                <AccountDropButton onClick={() => setIsOpen('account')}>
                  <User24 />
                  <IconText>Account</IconText>
                  <CaretDown24 />
                </AccountDropButton>
                {isOpen && (
                  <DropDownListContainer ref={ref}>
                    <DropDownList>
                      <Link href={`/login`} passHref>
                        <LinkButton>Login</LinkButton>
                      </Link>
                      <Link href={`/register`} passHref>
                        <LinkButton>Register</LinkButton>
                      </Link>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            )}
      
            {get(loggedIn, 'data.token', false) && (
              <DropDownContainer>
                <AccountDropButton onClick={() => setIsOpen('shop')}>
                  <Store24 />
                  <IconText>My Shop</IconText>
                  <CaretDown24 />
                </AccountDropButton>
                {isOpen === 'shop' && (
                  <DropDownListContainer ref={ref}>
                    <DropDownList>
                      <Link href={`/dashboard`} passHref>
                        <LightButton>Dashboard</LightButton>
                      </Link>
                      <Link href={`/my-products`} passHref>
                        <LightButton>My Products</LightButton>
                      </Link>
                      <Link href={`/my-services`} passHref>
                        <LightButton>My Services</LightButton>
                      </Link>
                      <Link href={`/my-orders`} passHref>
                        <LightButton>Recieved Orders</LightButton>
                      </Link>
                      {/* <Link href={`/my-quotations`} passHref>
                        <LightButton>Recieved Quotations</LightButton>
                      </Link> */}
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            )}
      
            <DropDownContainer>
              <Link href={`/basket`} passHref>
                <AccountDropButton>
                  <ShoppingBag24 />
                  <IconText>Basket {items.length !== 0 ? `(${items.length})` : ''}</IconText>
                </AccountDropButton>
              </Link>
            </DropDownContainer>
          </UserAccountSection>
        </LowerHeader>
      </HeaderContainer>
    </ParentHeaderComponent>
  );
};

export default withCookies(Header);
