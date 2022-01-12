import styled from 'styled-components';

export const Header = styled.div.attrs({
  className: `d-flex w-100 justify-content-center`,
})`
  font-size: 2.3rem;
  font-weight: 500;
  padding-bottom: 10px;
  padding-top: 15px;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: solid 1px #8ac240b8;
`;

export const GuidesTable = styled.div.attrs({
  className: `d-flex`,
})``;

export const NameTitle = styled.div.attrs({
  className: `col-8 p-2`,
})`
  border: 1px solid #ddd;
`;

export const SizeTitle = styled.div.attrs({
  className: `col-4 p-2`,
})`
  border: 1px solid #ddd;
`;
