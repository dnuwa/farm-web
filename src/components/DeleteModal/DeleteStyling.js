import styled from 'styled-components';

export const DelContentWrapper = styled.div`
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-family: ${`'Roboto'`};
`;

export const ContentRow = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  font-family: ${`'Roboto'`};
`;

export const FieldTitle = styled.div`
  font-weight: 700;
  width: 200px;
  border-right: 1px solid #ddd;
  padding: 8px;
  font-family: ${`'Roboto'`};
`;

export const FieldValue = styled.div`
  padding: 8px;
`;

export const DeleteButton = styled.button`
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  font-family: ${`'Roboto'`};
`;

export const CloseButton = styled.button`
  color: #333;
  background-color: #fff;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid #ccc;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  margin-right: 8px;
  font-family: ${`'Roboto'`};
`;

export const HorizaontalLine = styled.div`
  border-bottom: 1px solid #ddd;
  width: 100%;
`;

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
