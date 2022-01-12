import styled from 'styled-components';
import { Media } from 'utils/theme';

export const Header = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export const PageBody = styled.div.attrs({
  className: `d-flex flex-wrap`,
})``;

export const SearchFilters = styled.div.attrs({
  className: `d-flex flex-column col-md-3 col-sm-12`,
})`
  background: #fff;
  padding: 14px;
  margin: 5px 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #8ac23f;
  border-radius: 4px;
`;

export const SearchedResult = styled.div.attrs(({
  className:`d-flex flex-wrap col-md-9 col-sm-12`
}))`
  padding-right: 0;
`;
