import styled, { css } from 'styled-components';

export const PageContentWrapper = styled.div.attrs({
  className: `col-8 m-auto`,
})`
  font-family: ${`'Roboto'`};
`;

export const PageNavWrapper = styled.ul.attrs({
  className: `d-flex`,
})`
  list-style: none;
  padding: 0;
  background: #ffffff;
  border-radius: 4px;
  border: solid 1px #ddd;
  display: flex;
  justify-content: space-evenly;
  
  .active{
    border-bottom: 3px solid #8ac240;
  }
`;

export const PageTab = styled.li`
  margin-top: 0;
  /* margin-bottom: 10px; */
  padding: 10px;

  &:hover {
    border-bottom: 3px solid #8ac240;
  }
`;

export const TabBtn = styled.button`
  font-size: 14px;
  color: #517324;
  border: transparent;
  background: white;
  font-family: ${`'Roboto'`} !important;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

export const FormWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  border: solid 1px #ddd;
  margin-bottom: 24px;
`;

export const FormHeader = styled.div.attrs({
  className: `d-flex`,
})`
  background: #f5f5f5;
  padding: 10px 15px;
  font-size: 16px;
  border-bottom: solid 1px #ddd;
  width: 100%;
`;

export const InputsWrapper = styled.div`
  padding: 15px;
  background: white;
`;

export const ContactsButtonsWrapper = styled.div.attrs({
  className: `d-flex justify-content-between`,
})``;

export const ContactsBtnWrapper = styled.div.attrs({
  className: `col-3 p-0 m-0`,
})``;
