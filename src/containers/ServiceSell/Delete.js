import React, { useRef, useState, useEffect } from 'react';
import Modal from 'components/Modal';
import { OverlayContainer, ModalFooter, ContentWrapper, Header, CloseIcon, MBody } from 'components/Modal/ModalComp';
import { withCookies } from 'react-cookie';
import { DeleteBtn } from 'components/Table/TableComponent';
import {
  DelContentWrapper,
  ContentRow,
  FieldTitle,
  FieldValue,
  ErrorFeed,
  DeleteButton,
  HorizaontalLine,
  CloseButton,
} from 'components/DeleteModal/DeleteStyling';
import { TrashCan16 } from '@carbon/icons-react';
import axios from 'axios';

const PopUpContainer = ({ id, setLoading }) => {
  let modalRef = useRef();

  const [pdt, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items/${id}`, {}).then(res => setProduct(res.data.data.item));
  }, []);

  const handleDelete = e => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: 'DELETE',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items/${id}`,
    })
      .then(res => {
        setLoading(false);
        modalRef && modalRef.current && modalRef.current.closeModal();
      })
      .catch(err => {
        setError(err.response);
        setLoading(false);
      });
  };

  return (
    <>
      <Modal ref={modalRef}>
        {containerRef => (
          <OverlayContainer ref={containerRef}>
            <ContentWrapper>
              <Header>
                <p className="header-title">Delete Product</p>
                <CloseIcon
                  onClick={() => {
                    modalRef && modalRef.current && modalRef.current.closeModal();
                  }}
                />
              </Header>
              <HorizaontalLine />
              {pdt && (
                <>
                  <MBody>
                    <h4>Product Details</h4>
                    <DelContentWrapper>
                      <ContentRow>
                        <FieldTitle>Product Name</FieldTitle>
                        <FieldValue>{pdt.product_name}</FieldValue>
                      </ContentRow>
                      <ContentRow>
                        <FieldTitle>Description</FieldTitle>
                        <FieldValue>{pdt.description}</FieldValue>
                      </ContentRow>
                      <ContentRow>
                        <FieldTitle>Featured Image</FieldTitle>
                        <FieldValue>{pdt.featured_image}</FieldValue>
                      </ContentRow>
                    </DelContentWrapper>

                    <ErrorFeed label={`Are you sure you want to delete this product? This action cannot be undone!`} />
                  </MBody>
                  <HorizaontalLine />
                  <ModalFooter>
                    <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                    <CloseButton
                      onClick={() => {
                        modalRef && modalRef.current && modalRef.current.closeModal();
                      }}>
                      Close
                    </CloseButton>
                  </ModalFooter>
                </>
              )}
            </ContentWrapper>
          </OverlayContainer>
        )}
      </Modal>

      <DeleteBtn
        onClick={() => {
          modalRef && modalRef.current && modalRef.current.openModal();
        }}>
        <TrashCan16 />
        Delete{' '}
      </DeleteBtn>
    </>
  );
};

export default withCookies(PopUpContainer);
