import React, { useRef } from 'react';
import Modal from 'components/Modal';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  OverlayContainer,
  ModalFooter,
  ContentWrapper,
  Header,
  CloseIcon,
  MBody,
  ModalLink,
} from 'components/Modal/ModalComp';
import { SelectedItem } from 'components/Home/HomeComponents';
import { PlanButton, ProductPlanButton } from 'components/Buttons';

const PlannerUnsignedIn = ({ productPage }) => {
  let modalRef = useRef();

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <p className="header-title">Add to planner</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <SelectedItem>
                  <p>
                    To use the planner,{' '}
                    <Link href={`/login`} passHref>
                      <ModalLink>login</ModalLink>
                    </Link>{' '}
                    if you have an account or{' '}
                    <Link href={`/register`} passHref>
                      <ModalLink>register</ModalLink>
                    </Link>{' '}
                    if you don't have one.
                  </p>
                </SelectedItem>
              </MBody>
            </ContentWrapper>
          </OverlayContainer>
        )}
      </Modal>
      {productPage ? (
        <ProductPlanButton
          action={() => {
            modalRef && modalRef.current && modalRef.current.openModal();
          }}
        />
      ) : (
        <PlanButton
          action={() => {
            modalRef && modalRef.current && modalRef.current.openModal();
          }}
        />
      )}
    </>
  );
};

export default PlannerUnsignedIn;
