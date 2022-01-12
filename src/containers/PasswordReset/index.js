import React, { useState } from 'react';
import { ContentWrapper, AuthTitle, LoginPanel, InputWrapper, ResetSubHeading } from 'components/Login/LoginComponents';
import { ErrorFeed } from 'components/ErrorFeed';
import { ResetSuccess } from 'components/ResetSuccess';
import { TextInput } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';
import axios from 'axios';

const PasswordReset = () => {
  let initialState = {
    email: '',
  };

  let [formValues, onChangeValue] = useState(initialState);
  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(null);

  const handleSubmit = () => {
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/auth/forgotPassword`,
      data: {
        identity: formValues.email,
      },
    })
      .then(res => setSuccess(res))
      .catch(err => setError(err.response));
  };

  return (
    <>
      {!success ? (
        <ContentWrapper>
          <AuthTitle>Forgot Password</AuthTitle>
          <LoginPanel>
            <ResetSubHeading>Please enter the email id of the account to reset your password</ResetSubHeading>
            {error && <ErrorFeed label={error.data.message} />}
            <TextInput
              placeholder={`Enter email`}
              value={formValues.email}
              onChangeValue={d => onChangeValue({ ...formValues, email: d })}
            />
            <InputWrapper>
              <DefaultButton
                onClick={e => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                Submit
              </DefaultButton>
            </InputWrapper>
          </LoginPanel>
        </ContentWrapper>
      ) : (
        <ResetSuccess label={formValues.email} />
      )}
    </>
  );
};

export default PasswordReset;
