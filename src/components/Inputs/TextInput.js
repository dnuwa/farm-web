import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';

const ErrorLabel = styled.input.attrs({
  className: `d-flex`,
})`
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: ${`'Roboto'`};
  background: red;
  border-radius: 2px;
  padding: 4px 16px;
  position: absolute;
  bottom: -16px;
  right: 8px;
  z-index: -1;
  opacity: 0;
  transition: all ease 0.25s;
`;

const TextInputWrapper = styled.input.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextInput = ({ placeholder, value = '', onChangeValue = false, ...props }) => (
  <TextInputWrapper placeholder={placeholder} onChange={e => onChangeValue(e.target.value)} value={value} {...props} />
);

const Select = styled.select.attrs({
  className: `d-flex`,
})`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: ${`'Roboto'`};
`;

export const Dropdown = ({ placeholder, value = '', onChangeValue = false, children }) => (
  <Select placeholder={placeholder} onChange={e => onChangeValue(e.target.value)} value={value}>
    {Children.map(children, child =>
      cloneElement(child, {
        /* add props to pass here */
      })
    )}
  </Select>
);

const TextAreaWrapper = styled.textarea.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = ({ placeholder, value = '', onChangeValue = false, ...props }) => (
  <TextAreaWrapper placeholder={placeholder} onChange={e => onChangeValue(e.target.value)} value={value} {...props} />
);

const ImageInputWrapper = styled.input.attrs({
  className: `d-flex`,
})`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ImageInput = ({ value = '', onChangeValue = false, ...props }) => (
  <ImageInputWrapper onChange={e => onChangeValue(e.target.value)} value={value} {...props} />
);