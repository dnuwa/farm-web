import styled from 'styled-components';
import { Media } from 'utils/theme';

export const HomeContentWrapper = styled.div.attrs({
  className: `container`,
})`
  padding: 16px 0;

  ${Media.phone`
    padding: 8px;
  `}

  ${Media.tablet`
    padding: 8px;
  `}

  ${Media.giant`
    padding: 8px;
  `}
`;

export const SectionHeader = styled.div.attrs({
  className: `d-flex justify-content-between`,
})`
  background-color: #5aa000;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 8px;
  margin-top: 12px;
  font-family: ${`'Roboto'`};
`;

export const SectionHeading = styled.h2`
  font-weight: 500;
  font-size: 1.515rem;
  line-height: 30px;
  margin: 0 0 8px 8px;
  text-transform: uppercase;
  color: white;
  font-family: ${`'Roboto'`};

  ${Media.phone`
    font-size: 12px;
  `}

  ${Media.tablet`
    font-size: 12px;
  `}

  ${Media.giant`
    font-size: 12px;
  `}
`;

export const SelectedItem = styled.div.attrs({
  className: `d-flex`,
})`
  color: #8a6d3b;
  background-color: #fcf8e3;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid #faebcc;
  border-radius: 4px;
  width: 100%;
  padding: 15px;
  font-family: ${`'Roboto'`};
`;

export const Hline = styled.hr`
  color: #ccc;
`;

export const BlogsRow = styled.div.attrs({
  className: `d-flex flex-wrap justify-content-between`,
})``;

export const BlogWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  background-color: white;
  padding: 8px;
  margin-bottom: 16px;
  width: 49.5%;

  &:hover{
    cursor: pointer;
  }
`;

export const BlogFullpage = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  background-color: white;
  padding: 16px;
  margin-bottom: 16px;
`;

export const BlogDiv = styled.div`
  img {
    display: none !important;
  }
`;
