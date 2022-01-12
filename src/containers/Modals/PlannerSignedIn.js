import React, { useRef, useState, useEffect } from 'react';
import Modal from 'components/Modal';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
import { ErrorFeed } from 'components/ErrorFeed';
import { PlanButton, DefaultButton, ProductPlanButton } from 'components/Buttons';
import axios from 'axios';
import { get } from 'lodash';

const PlannerSignedIn = ({ product, productPage, cookies, product_name }) => {
  let modalRef = useRef();

  const [selected, setSelected] = useState(null);

  const router = useRouter();

  const handleQtyChange = qty => {
    setSelected({ ...selected, quantity: qty !== null ? Number(qty) : 1 });
  };

  let loggedIn = cookies.get('auth_token');
  const [planner, setPlanner] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/${loggedIn.data.user.ID}`,
      // headers: {
      //   Authorization: `Bearer ${isAuthoriszed}`,
      // },
    })
      .then(res => setPlanner(res.data.data.planners))
      .catch(err => setError(err.response));
  }, []);

  let initialState = {
    plannerId: '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  let [success, setSuccess] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/${parseInt(
        formValues.plannerId !== '' ? formValues.plannerId : 1
      )}/items`,
      data: {
        product: !productPage ? selected.ID : parseInt(get(router, 'query.id')),
        quantity: selected.quantity,
      },
    })
      .then(res => {
        setSuccess(res);
        modalRef && modalRef.current && modalRef.current.closeModal();
      })
      .catch(err => setError(err.response));
  };

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
                  {!productPage ? product.product_name : product_name} has been added to basket
                </SelectedItem>

                {!productPage && (
                  <>
                    <ModalLabel>Quantity</ModalLabel>
                    <QuantityInput1
                      value={selected.quantity}
                      handleQtyChange={handleQtyChange}
                      setSelected={setSelected}
                      selected={selected}
                    />
                  </>
                )}

                <ModalLabel>Choose planner</ModalLabel>
                <Dropdown
                  value={formValues.plannerId}
                  onChangeValue={d => onChangeValue({ ...formValues, plannerId: d })}>
                  <option value={1}>General Planner</option>
                  {planner.map(({ title, ID }) => (
                    <option value={ID}>{title}</option>
                  ))}
                </Dropdown>
                <Link href={`/planner`}>
                  <ModalLink>Manage planners</ModalLink>
                </Link>
                {isError && <ErrorFeed label={`An Error occured`} />}
              </MBody>

              <ModalFooter>
                <InnerWrapper>
                  <DefaultButton bgColor="#8ac240" managed onClick={handleSubmit}>
                    Add to plan
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
      {productPage ? (
        <ProductPlanButton
          action={() => {
            modalRef && modalRef.current && modalRef.current.openModal();
            setSelected({ ...product, quantity: 1 });
          }}
        />
      ) : (
        <PlanButton
          action={() => {
            modalRef && modalRef.current && modalRef.current.openModal();
            setSelected({ ...product, quantity: 1 });
          }}
        />
      )}
    </>
  );
};

export default withCookies(PlannerSignedIn);
