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
  ModalLabel,
  ModalLink,
} from 'components/Modal/ModalComp';
import { Spacer } from 'components/Product/ProductComponents';
import { withCookies } from 'react-cookie';
import { SelectedItem } from 'components/Home/HomeComponents';
import { QuantityInput1 } from 'components/PrdQuantity/ProductQuantity';
import { Dropdown } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';
import { QuantityUpdate } from 'components/Basket/BasketComponents';
import { incrementQuantity } from 'redux/cart.slice';

const ChangeQuantity = ({ product }) => {
  let modalRef = useRef();

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);

  const handleQtyChange = quantity => {
    setSelected({ ...selected, quantity });
  };

  const updateQuantity = e => {
    e.preventDefault();
    dispatch(incrementQuantity(selected));
    modalRef && modalRef.current && modalRef.current.closeModal();
  };

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <ModalLabel>Quantity</ModalLabel>
                <QuantityInput1
                  value={selected.quantity}
                  handleQtyChange={handleQtyChange}
                  setSelected={setSelected}
                  selected={selected}
                />
              </MBody>

              <ModalFooter>
                <InnerWrapper>
                  <DefaultButton onClick={updateQuantity} bgColor="#8ac240" managed>
                    Save
                  </DefaultButton>
                </InnerWrapper>
              </ModalFooter>
            </ContentWrapper>
          </OverlayContainer>
        )}
      </Modal>
      <QuantityUpdate
        onClick={e => {
          e.preventDefault();
          setSelected(product);
          modalRef && modalRef.current && modalRef.current.openModal();
        }}>
        {product.quantity}
      </QuantityUpdate>
    </>
  );
};

export default ChangeQuantity;
