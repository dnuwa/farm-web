import React, { useRef } from 'react';
import Modal from 'components/Modal';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { OverlayContainer, ModalFooter, ContentWrapper, Header, CloseIcon, MBody } from 'components/Modal/ModalComp';
import { withCookies } from 'react-cookie';
import { SelectedItem } from 'components/Home/HomeComponents';
import { BuyButton, PrimaryBtn, DefaultBtn, ProductBuyButton } from 'components/Buttons';

import { addToCart } from 'redux/cart.slice';

const PopUpContainer = ({
  cookies,
  productPage,
  ID,
  quantity,
  featured_image,
  product_name,
  local_price,
  local_currency,
}) => {
  let modalRef = useRef();

  const dispatch = useDispatch();

  let loggedIn = cookies.get('auth_token');

  const continueBuying = e => {
    e.preventDefault();
    modalRef && modalRef.current && modalRef.current.closeModal();
  };

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <p className="header-title">Selected product</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <SelectedItem>{product_name} has been added to basket</SelectedItem>
              </MBody>

              <ModalFooter>
                <DefaultBtn onClick={continueBuying}>Continue Buying</DefaultBtn>
                {loggedIn ? (
                  <Link href={`/basket`}>
                    <PrimaryBtn>View Basket and Order</PrimaryBtn>
                  </Link>
                ) : (
                  <Link href={`/login`}>
                    <PrimaryBtn>View Basket and Order</PrimaryBtn>
                  </Link>
                )}
              </ModalFooter>
            </ContentWrapper>
          </OverlayContainer>
        )}
      </Modal>

      {productPage ? (
        <ProductBuyButton
          label={`Buy`}
          action={() => {
            modalRef && modalRef.current && modalRef.current.openModal();
            dispatch(addToCart({ ID, quantity, featured_image, product_name, local_price, local_currency }));
          }}
        />
      ) : (
        <BuyButton
          label={`Buy`}
          action={() => {
            modalRef && modalRef.current && modalRef.current.openModal();
            dispatch(addToCart({ ID, quantity, featured_image, product_name, local_price, local_currency }));
          }}
        />
      )}
    </>
  );
};

export default withCookies(PopUpContainer);
