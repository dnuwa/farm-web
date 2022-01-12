import React, { useState } from 'react';
import { useCookies, withCookies } from 'react-cookie';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
import {
  ContentWrapper,
  InputContainer,
  RowWrapper,
  BtnWrapper,
  ProgressBarWrapper,
  StageMark,
} from 'components/Register/RegisterComponents';
import { SpinnerCircular } from 'spinners-react';
import { AuthTitle, Label, HeaderLabel } from 'components/Login/LoginComponents';
import { DefaultButton } from 'components/Buttons';
import { ErrorFeed } from 'components/ErrorFeed';
import { TextInput, Dropdown, TextArea, ImageInput } from 'components/Inputs/TextInput';
import Link from 'next/link';
import axios from 'axios';

const Register = ({ cookies }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let partnerId = cookies.get('partnerId');

  const [cookie, setCookie] = useCookies(['auth_token', 'remember_me', 'identity', 'password']);

  let initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  const handleSubmit = () => {
    setLoading(true);

    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/auth/register`,
      data: {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        password: formValues.password,
        partnerId: partnerId || localStorage.getItem('partnerId') || 1,
      },
    })
      .then(res => {
        setCookie('auth_token', JSON.stringify(res.data), {
          path: '/',
          sameSite: true,
        });
        // if (JSON.stringify(rememberMe)) {
        //   setCookie('identity', JSON.stringify(formValues.email));
        //   setCookie('password', JSON.stringify(formValues.password));
        // }
        console.log('res ----', res);
        setLoading(false);
        router.push('/verify');
      })
      .catch(err => {
        setError(err.response);
        setLoading(false);
      });
  };

  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (get(userData, 'userInfo.token', false)) {
  //     router.push('/verify');
  //   } else {
  //     setError(get(userData, 'error', `ERROR`));
  //   }
  // }, [userData]);

  // console.log("form-date ---", formValues.phone);

  return (
    <ContentWrapper>
      <AuthTitle>Join for free</AuthTitle>
      <ProgressBarWrapper>
        <StageMark lable="Register" number="1" active />
        <StageMark lable="Verify" number="2" />
        <StageMark lable="Complete" number="3" />
      </ProgressBarWrapper>
      {error && <ErrorFeed label={error.data.message} />}
      {error && error.data.message.includes('Missing credentials for "PLAIN"') && (
        <ErrorFeed label={error.data.message + `CONTACT ADMIN ON [+256 786 224601 / +256 758 956755]`} />
      )}
      <RowWrapper>
        <InputContainer>
          <Label>Name</Label>
          <TextInput value={formValues.name} onChangeValue={d => onChangeValue({ ...formValues, name: d })} />
        </InputContainer>
        <InputContainer>
          <Label>Phone</Label>
          {/* <PhoneInput
            country={'ug'}
            value={formValues.phone}
            onChange={d => onChangeValue({ ...formValues, phone: d })}
          /> */}
          <TextInput
            placeholder="+256701000000"
            value={formValues.phone}
            onChangeValue={d => onChangeValue({ ...formValues, phone: d })}
          />
        </InputContainer>
      </RowWrapper>
      <RowWrapper>
        <InputContainer>
          <Label>Email (optional)</Label>
          <TextInput value={formValues.email} onChangeValue={d => onChangeValue({ ...formValues, email: d })} />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <TextInput
            type="password"
            value={formValues.password}
            onChangeValue={d => onChangeValue({ ...formValues, password: d })}
          />
        </InputContainer>
      </RowWrapper>

      <RowWrapper>
        <InputContainer>
          <Label>Gender</Label>
          <Dropdown value={formValues.gender} onChangeValue={d => onChangeValue({ ...formValues, gender: d })}>
            <option>Select</option>
            <option value="male">Male</option>
            <option value="famele">Female</option>
          </Dropdown>
        </InputContainer>
        <InputContainer />
      </RowWrapper>
      <HeaderLabel>
        By continuing with registration, you confirm that you have read and agree to{' '}
        <Link href={`/login`}>our terms & conditions.</Link>
      </HeaderLabel>
      <BtnWrapper>
        {loading && !error ? (
          <SpinnerCircular enabled={loading} />
        ) : (
          <DefaultButton
            onClick={e => {
              e.preventDefault();
              handleSubmit();
            }}>
            Register
          </DefaultButton>
        )}
      </BtnWrapper>
      <HeaderLabel>
        Already Registered? <Link href={`/login`}>Login Here</Link>{' '}
      </HeaderLabel>
    </ContentWrapper>
  );
};
export default withCookies(Register);
