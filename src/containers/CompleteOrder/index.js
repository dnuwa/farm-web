import React, { useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { SpinnerCircular } from 'spinners-react';
import {
  CheckoutContentWrapper,
  Section,
  InnerWrapper,
  SummeryTitle,
  SummerySubTitle,
  Title,
  ItemLabel,
  SubLabels,
  SectionHeader,
  InnerSectionWrapper,
  FormWrapper,
  AccountTextWrap,
  TopUpLink,
  DFlex,
} from 'components/Order/Complete';
import { Note, Para } from 'components/Payment/PayementComponents';
import { Label, HelperText, InputWrapper, HeaderLabel } from 'components/Login/LoginComponents';
import { RadioButton } from 'components/Planner/PlannerComponents';
import { TextInput, Dropdown, TextArea, ImageInput } from 'components/Inputs/TextInput';
import { Checkbox } from 'components/Inputs/CheckBox';
import { DefaultButton } from 'components/Buttons';
import { ErrorFeed } from 'components/ErrorFeed';
import { useCookies } from 'react-cookie';
import { get } from 'lodash';
import { clearCart } from 'redux/cart.slice';
import axios from 'axios';
import Link from 'next/link';

const CompleteOrder = ({ cookies }) => {
  const cart = useSelector(state => state.cart);

  const router = useRouter();

  const [cookie, setCookie] = useCookies(['auth_token', 'remember_me', 'identity', 'password']);

  const dispatch = useDispatch();

  let loggedIn = cookies.get('auth_token');

  let partnerId = cookies.get('partnerId');

  const [error, setError] = useState(false);

  const [orderSuccess, setOrderSuccess] = useState('');
  const [orderError, setOrderError] = useState(false);

  const [loading, setLoading] = useState(false);

  let initialState = {
    email: cookie.identity ? cookie.identity : '',
    password: cookie.password ? cookie.password : '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  const handleSubmit = () => {
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/auth/login`,
      data: {
        identity: formValues.email,
        password: formValues.password,
      },
    })
      .then(res => {
        setCookie('auth_token', JSON.stringify(res.data), {
          path: '/',
          sameSite: true,
        });
        if (JSON.stringify(rememberMe)) {
          setCookie('identity', JSON.stringify(formValues.email));
          setCookie('password', JSON.stringify(formValues.password));
        }
      })
      .catch(err => setError(err.response));
  };

  //set regions
  const [regions, setRegions] = useState([]);

  //order form state
  let orderInitialState = {
    fullname: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
    region: '',
    district: '',
    shipping: 'STANDARD',
    by_for: 'MYSELF',
    notes: '',
  };

  let [orderFormValues, onChangeOrderValue] = useState(orderInitialState);

  useEffect(() => {
    onChangeOrderValue({
      ...orderFormValues,
      fullname: get(loggedIn, 'data.user.fullname', ''),
      email: get(loggedIn, 'data.user.email', ''),
      phone: get(loggedIn, 'data.user.phone', ''),
      address: get(loggedIn, 'data.user.address', ''),
    });

    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/regions`,
      headers: {
        Authorization: `Bearer ${cookie.access_token}`,
      },
    })
      .then(res => setRegions(res.data))
      .catch(err => setError(err.response));
  }, []);

  //set district/
  const [districts, setDistricts] = useState(initialState);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/regions/${Number(orderFormValues.region)}/districts`,
      headers: {
        Authorization: `Bearer ${cookie.access_token}`,
      },
    })
      .then(res => setDistricts(res.data))
      .catch(err => setError(err.response));
  }, [orderFormValues.region]);

  const handleOrderSubmit = () => {
    if (cart.length !== 0) {
      setLoading(true);
      axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_PARTNER_API}/orders`,
        headers: {
          Authorization: `Bearer ${cookie.access_token}`,
        },
        data: {
          order_by: orderFormValues.fullname,
          phone: orderFormValues.phone,
          paymentMethod: orderFormValues.paymentMethod,
          region: Number(orderFormValues.region),
          district: Number(orderFormValues.district),
          items: cart.map(({ ID, quantity }) => ({ product: ID, quantity })),
          partnerId: partnerId ? partnerId : 1,
          userId: loggedIn.data.user.ID,
          notes: orderFormValues.notes,
        },
      })
        .then(res => {
          setOrderSuccess(res.data);
          setLoading(false);
          router.push('/my-orders');
        })
        .catch(err => {
          setOrderError(err.response);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      setOrderError(true);
    }
  }, []);

  const [shippingAmount, setShippingAmount] = useState(null);

  useEffect(() => {
    get(regions, 'data.regions', []).filter(a => {
      if (a.ID == orderFormValues.region) {
        setShippingAmount(a);
      }
    });
  }, [orderFormValues.region]);

  const [rememberMe, setRememberMe] = useState(cookie.remember_me);

  useEffect(() => {
    setCookie('remember_me', JSON.stringify(rememberMe));
  }, [rememberMe]);

  return (
    <HomeContentWrapper>
      <CheckoutContentWrapper>
        {/* if not logged in */}

        {loggedIn === undefined ? (
          <Section>
            <Label>Email or Phone</Label>
            {error && <ErrorFeed label={get(error, 'data.message', 'something went wrong')} />}
            <HelperText>
              To complete your order, please login below if you have an account or click on the register button if you
              don't have an account.
            </HelperText>
            <TextInput value={formValues.email} onChangeValue={d => onChangeValue({ ...formValues, email: d })} />
            <InputWrapper>
              <Label>Password</Label>
              <TextInput
                type="password"
                value={formValues.password}
                onChangeValue={d => onChangeValue({ ...formValues, password: d })}
              />
            </InputWrapper>
            <InputWrapper>
              <Checkbox label="Remember Me" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
            </InputWrapper>
            <InputWrapper>
              <DefaultButton onClick={handleSubmit}>Login</DefaultButton>
            </InputWrapper>
            <HeaderLabel>Don't have an account?</HeaderLabel>
            <InputWrapper>
              <Link href={`/signup`}>
                <DefaultButton bgColor="#f0ad4e">Register</DefaultButton>
              </Link>
            </InputWrapper>
            <HeaderLabel>
              <Link href={`/password-reset`}>Forgot Password? Reset</Link>
            </HeaderLabel>
          </Section>
        ) : (
          <Section>
            <InnerSectionWrapper>
              <SectionHeader lable="Address Details" />

              <FormWrapper>
                <InputWrapper>
                  <Label>Full Name</Label>
                  <TextInput
                    value={orderFormValues.fullname}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, fullname: d })}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Email</Label>
                  <TextInput
                    value={orderFormValues.email}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, email: d })}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Phone Number</Label>
                  <TextInput
                    value={orderFormValues.phone}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, phone: d })}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Address</Label>
                  <TextInput
                    value={orderFormValues.address}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, address: d })}
                  />
                </InputWrapper>
              </FormWrapper>
            </InnerSectionWrapper>

            <InnerSectionWrapper>
              <SectionHeader lable="Delivery Options" />
              <FormWrapper>
                <InputWrapper>
                  <RadioButton
                    label="Standard Shipping"
                    value={orderFormValues.shipping}
                    checked={orderFormValues.shipping === `STANDARD`}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, shipping: d })}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Region</Label>
                  <Dropdown
                    value={orderFormValues.region}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, region: d })}>
                    <option>Select region</option>
                    {get(regions, 'data.regions', []).map(region => (
                      <option key={region.ID} value={region.ID}>
                        {region.name}
                      </option>
                    ))}
                  </Dropdown>
                  {orderError && orderFormValues.region === '' && <ErrorFeed label={`Select region`} />}
                </InputWrapper>
                <InputWrapper>
                  <Label>District/Town/Area</Label>
                  <Dropdown
                    value={orderFormValues.district}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, district: d })}>
                    <option>Select district</option>
                    {get(districts, 'data.districts', []).map(({ ID, name }) => (
                      <option key={ID} value={ID}>
                        {name}
                      </option>
                    ))}
                  </Dropdown>
                  {orderError && orderFormValues.district === '' && <ErrorFeed label={`Select district`} />}
                </InputWrapper>
                <InputWrapper>
                  <Label>
                    Delivered within 24 hours for UGX{' '}
                    {Number(get(shippingAmount, 'shipping_amount', 0)).toLocaleString()}
                  </Label>
                </InputWrapper>
              </FormWrapper>
            </InnerSectionWrapper>

            <InnerSectionWrapper>
              <SectionHeader lable="Extra Notes" />
              <FormWrapper>
                <Label>Enter any extra information about your order here.</Label>
                <TextArea
                  value={orderFormValues.notes}
                  onChangeValue={d => onChangeOrderValue({ ...orderFormValues, notes: d })}
                />
              </FormWrapper>
            </InnerSectionWrapper>
          </Section>
        )}

        <Section>
          <InnerWrapper>
            <SummeryTitle>YOUR ORDER</SummeryTitle>
            <SummerySubTitle>
              <Title>ITEM</Title>
              <Title>AMOUNT</Title>
            </SummerySubTitle>
            {cart.map(({ product_name, local_price, local_currency, id }) => (
              <SummerySubTitle id={id}>
                <ItemLabel>{product_name}</ItemLabel>
                <ItemLabel>
                  {local_currency !== '' ? local_currency : `UGX`} {Number(local_price).toLocaleString()}
                </ItemLabel>
              </SummerySubTitle>
            ))}
            <SubLabels>
              <Title>BASKET TOTAL</Title>
              <Title>
                UGX{' '}
                {cart
                  .reduce((accumulator, { local_price, quantity }) => {
                    return Number(accumulator + quantity * local_price);
                  }, 0)
                  .toLocaleString()}
              </Title>
            </SubLabels>
            <SubLabels>
              <Title>DELIVERY COST</Title>
              <Title>UGX {Number(get(shippingAmount, 'shipping_amount', 0)).toLocaleString()}</Title>
            </SubLabels>
            <SubLabels>
              <Title>SERVICE CHARGE</Title>
              <Title>UGX 0</Title>
            </SubLabels>

            <SummerySubTitle>
              <Title>TOTAL</Title>
              <Title>
                UGX
                {cart.reduce((accumulator, { local_price, quantity }) => {
                  return accumulator + quantity * local_price;
                }, 0) + Number(get(shippingAmount, 'shipping_amount', 0))}
              </Title>
            </SummerySubTitle>

            <Link href={`/basket`}>
              <DefaultButton>Modify Basket</DefaultButton>
            </Link>
          </InnerWrapper>

          <InnerSectionWrapper>
            <SectionHeader lable="Who are you buying for?" />
            <FormWrapper>
              <InputWrapper>
                <RadioButton
                  label="Myself"
                  value={`MYSELF`}
                  checked={orderFormValues.by_for === `MYSELF`}
                  onChangeValue={d => onChangeOrderValue({ ...orderFormValues, by_for: d })}
                />
              </InputWrapper>
              <InputWrapper>
                <RadioButton
                  label="Someone else"
                  value={`ALSE`}
                  checked={orderFormValues.by_for === `ALSE`}
                  onChangeValue={d => onChangeOrderValue({ ...orderFormValues, by_for: d })}
                />
              </InputWrapper>
            </FormWrapper>
          </InnerSectionWrapper>

          <InnerSectionWrapper>
            <SectionHeader lable="Payment Options" />
            <FormWrapper>
              <InputWrapper>
                <RadioButton
                  label="Mobile Money"
                  value="Mobile_Money"
                  checked={orderFormValues.paymentMethod === `Mobile_Money`}
                  onChangeValue={d => onChangeOrderValue({ ...orderFormValues, paymentMethod: d })}
                />
              </InputWrapper>
              <InputWrapper>
                <RadioButton
                  label="Bank Deposit/Transfer"
                  value="Bank_Deposit"
                  checked={orderFormValues.paymentMethod === `Bank_Deposit`}
                  onChangeValue={d => onChangeOrderValue({ ...orderFormValues, paymentMethod: d })}
                />
              </InputWrapper>

              {orderFormValues.paymentMethod === `Bank_Deposit` && (
                <>
                  <AccountTextWrap>
                    <Note>
                      NB - Please make payment within 15 minutes after confirming your Order to ease processing within
                      the Delivery
                    </Note>
                    <Para>
                      Timeline. Please Complete your Order First, then use the details below to make a Bank
                      Deposit/Transfer:
                    </Para>
                    <ul>
                      <li>Account Name: FAMUNERA LIMITED</li>
                      <li>Account Number: 104 220 103 3140</li>
                      <li>Bank: EQUITY BANK UGANDA</li>
                      <li>Swift Code: EQBLUGKAXXX</li>
                      <li>
                        Enter Your ORDER NUMBER and FULL NAMES in the Reference sections while making the
                        Transfer/Deposit
                      </li>
                    </ul>
                  </AccountTextWrap>
                </>
              )}
              <InputWrapper>
                <DFlex>
                  <RadioButton
                    label="Famunera Wallet (Wallet balance insufficient.)"
                    value="Famunera_Wallet"
                    checked={orderFormValues.paymentMethod === `Famunera_Wallet`}
                    onChangeValue={d => onChangeOrderValue({ ...orderFormValues, paymentMethod: d })}
                  />
                  <Link href={`/wallet`} passHref>
                    <TopUpLink>Top Up</TopUpLink>
                  </Link>
                </DFlex>
              </InputWrapper>
            </FormWrapper>
          </InnerSectionWrapper>
          {orderError && <ErrorFeed label={`An Error occured, please fill out the form correctly`} />}
          {cart.length === 0 && !orderError && !loading && (
            <ErrorFeed label={`An Error occured, please reselect your products`} />
          )}
          {loading ? (
            <SpinnerCircular enabled={loading} />
          ) : (
            <DefaultButton
              auto
              onClick={e => {
                e.preventDefault();
                handleOrderSubmit();
                dispatch(clearCart());
              }}>
              Confirm Order
            </DefaultButton>
          )}
        </Section>
      </CheckoutContentWrapper>
    </HomeContentWrapper>
  );
};

export default withCookies(CompleteOrder);
