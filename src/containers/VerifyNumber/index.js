import React from 'react';
import { ContentWrapper, AuthTitle, LoginPanel, InputWrapper, ResetSubHeading } from 'components/Login/LoginComponents';
import { TextInput } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';

const VerifyNumber = () => {
  return (
    <ContentWrapper>
      <AuthTitle>VERIFY PHONE NUMBER</AuthTitle>
      <LoginPanel>
        <ResetSubHeading>Enter the 6 digit code sent to your phone</ResetSubHeading>
        <TextInput placeholder={`00000`} />
        <InputWrapper>
          <DefaultButton>Verify</DefaultButton>
        </InputWrapper>
      </LoginPanel>
    </ContentWrapper>
  );
};

export default VerifyNumber;
