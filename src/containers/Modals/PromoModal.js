import React, { useRef, useState } from 'react';
import Modal from 'components/Modal';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  OverlayContainer,
  ModalFooter,
  InnerWrapper,
  ContentWrapper,
  Header,
  CloseIcon,
  MBody,
  DFlex,
} from 'components/Modal/ModalComp';
import { Label } from 'components/Login/LoginComponents';
import { HeaderLable, InputWrapper } from 'components/Planner/PlannerComponents';
import { DefaultButton, PromoButton } from 'components/Buttons';
import { TextInput } from 'components/Inputs/TextInput';
import { Checkbox } from 'components/Inputs/CheckBox';

const PlannerSignedIn = ({ product, productPage }) => {
  let modalRef = useRef();

  const [selected, setSelected] = useState(null);

  const handleQtyChange = qty => {
    setSelected({ ...selected, quantity: qty !== null ? Number(qty) : 1 });
  };

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <p className="header-title">Add Promotion</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <DFlex>
                  <InputWrapper>
                    <p className="m-0">Start Date</p>
                    <TextInput />
                  </InputWrapper>
                  <InputWrapper>
                    <p className="m-0">End Date</p>
                    <TextInput />
                  </InputWrapper>
                </DFlex>
                <InputWrapper>
                  <p className="m-0">Unit Price in UGX</p>
                  <TextInput />
                </InputWrapper>
                <InputWrapper>
                  <Checkbox
                    label="Is this a quantity based promotion?"
                    // checked={rememberMe}
                    // onChange={e => setRememberMe(e.target.checked)}
                  />
                </InputWrapper>
              </MBody>

              <ModalFooter>
                <InnerWrapper>
                  <button className="btn-success-">
                    Save Changes
                  </button>
                  <button className="btn-sec-">
                    Close
                  </button>
                </InnerWrapper>
              </ModalFooter>
            </ContentWrapper>
          </OverlayContainer>
        )}
      </Modal>
      <PromoButton
        action={() => {
          modalRef && modalRef.current && modalRef.current.openModal();
          setSelected({ ...product, quantity: 1 });
        }}
      />
    </>
  );
};

export default PlannerSignedIn;
