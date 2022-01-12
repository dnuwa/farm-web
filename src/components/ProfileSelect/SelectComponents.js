import styled from 'styled-components';

export const DropDownContainer = styled.div.attrs({
  className: `d-flex ml-2`,
})`
  > a {
    text-decoration: none;
  }
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  z-index: 1;
  width: 164px;
  top: 102px;
`;

export const DropDownList = styled('div')`
  margin: 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
`;
