import styled from 'styled-components';

export const ContentWrapper = styled.div.attrs({
  className: 'd-flex flex-column',
})`
  margin: 0 0 72px 0;
  font-family: ${`'Roboto'`};
`;

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding: 24px 0 0 0;
  font-family: ${`'Roboto'`};
`;

export const OrderID = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding: 0;
  font-family: ${`'Roboto'`};
`;

export const ContentPanel = styled.div.attrs({
  className: `col-sm-12 col-md-6 col-lg-4 m-auto`,
})`
  font-family: ${`'Roboto'`};
`;

export const HelperText = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  padding: 15px;
  margin: 8px 0;
  font-family: ${`'Roboto'`};
`;

export const Note = styled.div.attrs({
  className: `d-flex`,
})`
  color: #a94442;
`;

export const Para = styled.div.attrs({
  className: `d-flex`,
})`
  color: #333;
`;
