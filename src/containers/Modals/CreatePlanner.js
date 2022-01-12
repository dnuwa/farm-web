import React, { useRef, useState } from 'react';
import Modal from 'components/Modal';
import { AddFilled16 } from '@carbon/icons-react';
import {
  OverlayContainer,
  ModalFooter,
  InnerWrapper,
  ContentWrapper,
  Header,
  CloseIcon,
  MBody,
} from 'components/Modal/ModalComp';
import { withCookies } from 'react-cookie';
import { TextInput } from 'components/Inputs/TextInput';
import { Label, InputWrapper } from 'components/Login/LoginComponents';
import { DefaultButton } from 'components/Buttons';
import { ErrorFeed } from 'components/ErrorFeed';
import axios from 'axios';

const CreatePlanner = ({ cookies, setRelaod }) => {
  let modalRef = useRef();

  let loggedIn = cookies.get('auth_token');
  const [isError, setError] = useState(false);

  let initialState = {
    title: '',
  };

  let [success, setSuccess] = useState(false);

  let [formValues, onChangeValue] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();

    if (formValues.title === '') {
      setError(true);
    } else {
      axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners`,
        data: {
          title: formValues.title,
          userId: loggedIn.data.user.ID,
        },
      })
        .then(res => {
          setSuccess(res.data.success);
          setRelaod(true);
          setError(false);
          modalRef && modalRef.current && modalRef.current.closeModal();
          setSuccess(false);
          setRelaod(false);
        })
        .catch(err => {
          setError(err.response);
          setError(false);
        });
    }
  };

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <p className="header-title">Create a planner</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <InputWrapper>
                  <Label>Planner title</Label>
                  <TextInput value={formValues.title} onChangeValue={d => onChangeValue({ ...formValues, title: d })} />
                </InputWrapper>
                {isError && <ErrorFeed label={`An Error occured`} />}
              </MBody>
              <ModalFooter>
                <InnerWrapper>
                  <DefaultButton bgColor="#8ac240" managed onClick={handleSubmit}>
                    Save
                  </DefaultButton>
                  <DefaultButton
                    bgColor="#ec971f"
                    managed
                    onClick={() => {
                      modalRef && modalRef.current && modalRef.current.closeModal();
                    }}>
                    Cancel
                  </DefaultButton>
                </InnerWrapper>
              </ModalFooter>
            </ContentWrapper>
          </OverlayContainer>
        )}
      </Modal>

      <DefaultButton
        bgColor="#ec971f"
        auto
        onClick={e => {
          e.preventDefault();
          modalRef && modalRef.current && modalRef.current.openModal();
        }}>
        <AddFilled16 />
        Create a Planner
      </DefaultButton>
    </>
  );
};

export default withCookies(CreatePlanner);
