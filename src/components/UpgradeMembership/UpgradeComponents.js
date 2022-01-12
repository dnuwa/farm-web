import styled, {css} from 'styled-components';

export const Header = styled.div.attrs({
  className: `d-flex`,
})`
  font-weight: bold;
  color: #333;
  font-size: 1.515rem;
  text-transform: uppercase;
  border-bottom: 2px solid #e5e5e5;
`;

export const PackagesTable = styled.div.attrs({
  className: `col-12 d-flex`,
})`
  /* border-top: 2px solid #e5e5e5; */
`;

export const PackageColumn = styled.div.attrs({
  className: `col-4 flex-column`,
})`
  ${({ solid = false }) => css`
    text-align: center;
    padding: 8px;
    border-top: ${solid ? `solid 1px #e5e5e5` : `none`};
    background: ${solid ? `#fcfbfb` : `transparent`};
  `}
`;
