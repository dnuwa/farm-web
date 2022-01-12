import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const ContentWrapper = styled.div.attrs({
  className: 'd-flex flex-column',
})`
  margin: 0 0 72px 0;
  font-family: ${`'Roboto'`};
`;

export const AuthTitle = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding: 24px 0 8px 0;
  font-family: ${`'Roboto'`};
`;

export const LoginPanel = styled.div.attrs({
  className: `col-sm-12 col-md-6 col-lg-4 m-auto`,
})`
  font-family: ${`'Roboto'`};
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 700;
  color: #333;
  font-size: 14px;
  font-family: ${`'Roboto'`};
`;

export const HelperText = styled.div.attrs({
  className: `d-flex`,
})`
  color: #8a6d3b;
  background-color: #fcf8e3;
  border: solid 1px #faebcc;
  border-radius: 4px;
  padding: 15px;
  margin: 8px 0;
  font-family: ${`'Roboto'`};
`;

export const InputWrapper = styled.div.attrs({
  className: `d-flex flex-column mt-3 mb-3`,
})``;

export const HeaderLabel = styled.div`
  text-align: center;
  font-family: ${`'Roboto'`};
  color: #333;

  a {
    text-decoration: none;
    color: #337ab7;
  }
`;

export const ResetSubHeading = styled.div`
  text-align: center;
  font-size: 14px;
  color: #333;
  margin: auto;
  padding: 0 0 16px 0;
  font-family: ${`'Roboto'`};
`;
