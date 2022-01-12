import React, { useState, memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { createStructuredSelector } from 'reselect';
import { SpinnerCircular } from 'spinners-react';
import axios from 'axios';
import { get } from 'lodash';
import {
  ContentWrapper,
  AuthTitle,
  LoginPanel,
  Label,
  HelperText,
  InputWrapper,
  HeaderLabel,
} from 'components/Login/LoginComponents';
import { ErrorFeed } from 'components/ErrorFeed';
import { TextInput } from 'components/Inputs/TextInput';
import { Checkbox } from 'components/Inputs/CheckBox';
import { DefaultButton } from 'components/Buttons';
import Link from 'next/link';

// import ManagerActions from './actions';
// import { selectShowcases } from './selectors';

// const mapStateToProps = createStructuredSelector({
//   userData: selectShowcases(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     userLogin: payload => {
//       dispatch(ManagerActions.formSubmitAttempt(payload, true));
//     },
//   };
// }

const Login = () => {
  const [cookie, setCookie] = useCookies(['auth_token', 'remember_me', 'identity', 'password']);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [error, setError] = useState(false);

  let initialState = {
    email: cookie.identity ? cookie.identity : '',
    password: cookie.password ? cookie.password : '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  const handleSubmit = () => {
    setLoading(true);
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
        router.push('/');
        setLoading(false);
      })
      .catch(err => {
        setError(err.response);
        setLoading(false);
      });
  };

  const [rememberMe, setRememberMe] = useState(cookie.remember_me);

  useEffect(() => {
    setCookie('remember_me', JSON.stringify(rememberMe));
  }, [rememberMe]);

  return (
    <ContentWrapper>
      <AuthTitle>Login</AuthTitle>

      <LoginPanel>
        {error && <ErrorFeed label={get(error, 'data.message', 'something went wrong')} />}
        <Label>Email or Phone</Label>
        <HelperText>
          If using phone, please enter your full phone number including international code e.g +256712345678
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
          {loading && !error ? (
            <SpinnerCircular enabled={loading} />
          ) : (
            <DefaultButton
              onClick={e => {
                e.preventDefault();
                handleSubmit();
              }}>
              Login
            </DefaultButton>
          )}
        </InputWrapper>
        {!loading && (
          <>
            <HeaderLabel>Don't have an account?</HeaderLabel>
            <InputWrapper>
              <Link href={`/register`} passHref>
                <DefaultButton bgColor="#f0ad4e">Register</DefaultButton>
              </Link>
            </InputWrapper>
            <HeaderLabel>
              <Link href={`/password-reset`}>Forgot Password? Reset</Link>
            </HeaderLabel>
          </>
        )}
      </LoginPanel>
    </ContentWrapper>
  );
};

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default Login;
