import React, { useRef, useState, useEffect } from 'react';
import Modal from 'components/Modal';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AddFilled16, RequestQuote16, TrashCan16 } from '@carbon/icons-react';
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
import { RemveBtn, BtnText } from 'components/Planner/PlannerComponents';
import { Dropdown } from 'components/Inputs/TextInput';
import { QuantityInput1 } from 'components/PrdQuantity/ProductQuantity';
import { SelectedItem } from 'components/Home/HomeComponents';
import { PlanButton, ProductPlanButton, DefaultButton } from 'components/Buttons';
import axios from 'axios';

const EditPlannerItem = ({ productPage, itemId }) => {
  let modalRef = useRef();

  const [id, setId] = useState(false);
  // let loggedIn = cookies.get('auth_token');

  // console.log('id ---', id)

  const [planner, setPlanner] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/${3357}`,
      // url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/${parseInt(loggedIn.data.user.ID)}`,
      // headers: {
      //   Authorization: `Bearer ${isAuthoriszed}`,
      // },
    })
      .then(res => setPlanner(res.data.data.planners))
      .catch(err => setError(err.response));
  }, []);

  let initialState = {
    plannerId: '',
    quantity: 1,
  };

  let [formValues, onChangeValue] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();

    // axios({
    //   method: 'POST',
    //   url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/${parseInt(
    //     formValues.plannerId !== '' ? formValues.plannerId : 1
    //   )}/items`,
    //   data: {
    //     product: selected.ID,
    //     quantity: selected.quantity,
    //   },
    // })
    //   .then(res => {
    //     setSuccess(res);
    //     modalRef && modalRef.current && modalRef.current.closeModal();
    //   })
    //   .catch(err => setError(err.response));
  };

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <p className="header-title">Edit item</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <ModalLabel>Quantity</ModalLabel>
                <QuantityInput1
                value={formValues.quantity}
                handleQtyChange={d => onChangeValue({...formValues, quantity: d})}
                // setSelected={setSelected}
                // selected={selected}
                />
                <ModalLabel>Choose planner</ModalLabel>
                <Dropdown
                  value={formValues.plannerId}
                  onChangeValue={d => onChangeValue({ ...formValues, plannerId: d })}>
                  <option value={1}>General Planner</option>
                  {planner.map(({ title, ID }) => (
                    <option value={ID}>{title}</option>
                  ))}
                </Dropdown>
              </MBody>
              <ModalFooter>
                <InnerWrapper>
                  <DefaultButton bgColor="#8ac240" managed onClick={handleSubmit}>
                    Save Changes
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
      <RemveBtn
        onClick={e => {
          e.preventDefault();
          setId(itemId);
          modalRef && modalRef.current && modalRef.current.openModal();
        }}>
        <RequestQuote16 />
        <BtnText>Edit Item</BtnText>
      </RemveBtn>
    </>
  );
};

export default EditPlannerItem;
