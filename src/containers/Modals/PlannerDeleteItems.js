import React, { useRef, useState } from 'react';
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
import { ErrorFeed } from 'components/ErrorFeed';
import { SelectedItem } from 'components/Home/HomeComponents';
import { PlanButton, ProductPlanButton, DefaultButton  } from 'components/Buttons';

const EditPlannerItem = ({ itemId }) => {
  let modalRef = useRef();

  const [id, setId] = useState(false);

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
                <p className="header-title">Delete from planner</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <MBody>
                <ErrorFeed label="Are you sure you want to remove this item from your planner?" />
              </MBody>
              <ModalFooter>
                <InnerWrapper>
                  <DefaultButton bgColor="#8ac240" managed onClick={handleSubmit}>
                    yes, remove it!
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
        <TrashCan16 />
        <BtnText>Remove Item</BtnText>
      </RemveBtn>
    </>
  );
};

export default EditPlannerItem;
