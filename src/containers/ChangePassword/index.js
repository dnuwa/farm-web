import React, { useState } from 'react';
import {
  Panel,
  PanelHeading,
  HeaderLable,
  InnerBodySection,
  InputWrapper,
  BtnWrapper,
} from 'components/Planner/PlannerComponents';
import { ErrorFeed } from 'components/ErrorFeed';
import { DefaultButton } from 'components/Buttons';
import { TextInput } from 'components/Inputs/TextInput';
import axios from 'axios';

const ChangePassword = () => {
  let initialState = {
    old: '',
    new: '',
    confirm: '',
  };

  let [formValues, onChangeValue] = useState(initialState);
  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(null);
  let [matching, setMatching] = useState("");

  const handleSubmit = () => {
    if (formValues.new !== formValues.confirm) {
      setMatching('passwords dont match');
    } else {
      axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_AUTH_API}/auth/updatePassword`,
        data: {
          oldpassword: formValues.old,
          password: formValues.new,
        },
      })
        .then(res => setSuccess(res))
        .catch(err => setError(err.response));
    }
  };

  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Change Password</HeaderLable>
      </PanelHeading>
      <InnerBodySection>
        {error && <ErrorFeed label={error.data.message} />}
        {matching !== "" && <ErrorFeed label={matching} /> }
        <InputWrapper>
          <HeaderLable size="14px" mb="5px">
            Old Password
          </HeaderLable>
          <TextInput type="password"  value={formValues.old} onChangeValue={d => onChangeValue({ ...formValues, old: d })} />
        </InputWrapper>
        <InputWrapper>
          <HeaderLable size="14px" mb="5px">
            New Password
          </HeaderLable>
          <TextInput type="password" value={formValues.new} onChangeValue={d => onChangeValue({ ...formValues, new: d })} />
        </InputWrapper>
        <InputWrapper>
          <HeaderLable size="14px" mb="5px">
            Re-type New Password
          </HeaderLable>
          <TextInput type="password" value={formValues.confirm} onChangeValue={d => onChangeValue({ ...formValues, confirm: d })} />
        </InputWrapper>
        <BtnWrapper>
          <DefaultButton
            onClick={e => {
              e.preventDefault();
              handleSubmit();
            }}>
            Change Password
          </DefaultButton>
        </BtnWrapper>
      </InnerBodySection>
    </Panel>
  );
};

ChangePassword.layout = 'planner';
export default ChangePassword;
