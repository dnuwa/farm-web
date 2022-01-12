import { useState, useRef } from 'react';
import styled from 'styled-components';
import { AddAlt16, SubtractAlt16 } from '@carbon/icons-react';
import { Media } from 'utils/theme';

export const ContentWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  width: 100%;
  margin: auto 0 8px 0;
`;

export const AddBtn = styled.button.attrs({
  className: `d-flex`,
})`
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 3px 0 0 3px;
  padding: 6px;

  &:hover {
    background-color: #adadad;
    cursor: pointer;
  }
`;

export const SubBtn = styled.button.attrs({
  className: `d-flex`,
})`
  border: 1px solid #ccc;
  background-color: transparent;
  padding: 6px;
  border-radius: 0 3px 3px 0;

  &:hover {
    background-color: #adadad;
    cursor: pointer;
  }
`;

export const QTInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-left: transparent;
  border-right: transparent;
`;

export const QuantityInput = ({ placeholder, value, handleQtyChange, item }) => {
  return (
    <ContentWrapper>
      <AddBtn>
        <AddAlt16 />
      </AddBtn>
      <QTInput
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={e => handleQtyChange(item.ID, e.currentTarget.value)}
      />
      <SubBtn>
        <SubtractAlt16 />
      </SubBtn>
    </ContentWrapper>
  );
};

export const QuantityInput1 = ({ placeholder, value, handleQtyChange, setSelected, selected, children }) => {
  return (
    <ContentWrapper>
      <AddBtn
        onClick={e => {
          e.preventDefault();
          setSelected({ ...selected, quantity: value + 1 });
        }}>
        <AddAlt16 />
      </AddBtn>
      <QTInput
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={e => handleQtyChange(e.currentTarget.value)}
      />
      <SubBtn
        onClick={e => {
          e.preventDefault();
          setSelected({ ...selected, quantity: value - 1 });
        }}>
        <SubtractAlt16 />
      </SubBtn>
    </ContentWrapper>
  );
};
