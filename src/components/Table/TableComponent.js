import styled from 'styled-components';

export const DataTableHeader = styled.div.attrs({
  className: `d-flex justify-content-between m-3`,
})``;

export const EntriesSection = styled.div.attrs({
  className: `d-flex col-4 p-0`,
})``;

export const ColSpan = styled.span.attrs({
  className: `d-flex`,
})`
  margin: auto 2px;
  color: #333;
`;

export const SearchWrapper = styled.div.attrs({
  className: `d-flex p-0`,
})``;

export const SearchLable = styled.div.attrs({
  className: `d-flex p-0`,
})`
  align-items: center;
  width: 30%;
`;

export const TableWrapper = styled.div.attrs({
  className: `d-flex justify-content-between ml-3 mr-3`,
})`
  border: solid 1px #ddd;
`;

export const TableData = styled.div.attrs({
  className: `col-sm p-2`,
})`
  border: solid 1px #ddd;
`;

export const TableEmptySate = styled.div.attrs({
  className: `d-flex ml-3 mr-3 p-4`,
})`
  border: solid 1px #ddd;
  align-items: center;
  justify-content: center;
`;

export const TableFooter = styled.div.attrs({
  className: `d-flex mt-auto ml-3 mr-3 mb-3 justify-content-between`,
})``;

export const Pagination = styled.div.attrs({
  className: `d-flex`,
})``;

export const EditBtn = styled.button.attrs({
  className: `btn btn-sm`,
})`
  background-color: #286090;
  color: white;
  border: none;
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button.attrs({
  className: ``,
})`
  background-color: #c9302c;
  color: white;
  border: none;
  padding: 4px 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const PromoteBtn = styled.button.attrs({
  className: ``,
})`
  color: #fff;
  background-color: #f0ad4e;
  border: solid 1px #eea236;
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  font-family: ${`'Roboto'`};
  &:hover {
    cursor: pointer;
  }
`;
