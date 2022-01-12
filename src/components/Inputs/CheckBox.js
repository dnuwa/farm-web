import styled from 'styled-components';

const CheckWrapper = styled.div.attrs({
  className: `d-flex`,
})``;

const CheckLabel = styled.p`
  padding: 0 0 0 4px;
  margin: 0;
`;

const InputCheckBox = styled.input.attrs({
  className: `d-flex`,
})`
  margin: auto 0;
`;

export const Checkbox = ({ label, value, ...props }) => (
  <CheckWrapper>
    <InputCheckBox type="checkbox" {...props} value={value} />
    <CheckLabel>{label}</CheckLabel>
  </CheckWrapper>
);
