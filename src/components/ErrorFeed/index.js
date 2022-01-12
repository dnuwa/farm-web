import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

const ErrorWrapper = styled.div`
  color: #a94442;
  background-color: #f2dede;
  border: solid 1px #ebccd1;
  font-family: ${`'Roboto'`};
  border-radius: 4px;
  padding: 15px;
  margin: 8px 0;
`;

export const ErrorFeed = ({ label }) => <ErrorWrapper>{label}</ErrorWrapper>;
