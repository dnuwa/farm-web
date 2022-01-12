import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const Base = styled.div.attrs({
  className: 'd-flex flex-row',
})``;

export const SiteMaster = styled.div.attrs({
  className: 'd-flex flex-column',
})`
  min-height: 100vh !important;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const SiteContent = styled.div.attrs({
  className: 'container d-flex',
})`
  margin: 25px auto;

  ${Media.phone`
       flex-wrap: wrap;
       margin: 8px;
       padding: 0;

    `}

  ${Media.tablet`
       flex-wrap: wrap;
       margin: 8px;
       padding: 0;

    `}

  ${Media.giant`
     flex-wrap: wrap;
     margin: 8px;
     padding: 0;
  `}
`;

export const SideBar = styled.ul.attrs({
  className: `d-flex flex-column`,
})`
  width: 35%;
  color: #333;
  border-radius: 5px;
  margin: 0 24px 0 0;

  ${Media.phone`
       flex-wrap: wrap;
       width: 100%;
       margin: 0;
       padding: 0 0 8px 0;

    `}

  ${Media.tablet`
       flex-wrap: wrap;
       width: 100%;
       margin: 0;
       padding: 0 0 8px 0;

    `}

  ${Media.giant`
     flex-wrap: wrap;
     width: 100%;
     margin: 0;
     padding: 0 0 8px 0;
  `}
`;

export const SideMenuItem = styled.li.attrs({
  className: `d-flex`,
})`
  ${({ active = false }) => css`
    border-bottom: solid 1px #ddd;
    padding: 10px 15px;
    color: ${active ? `#333` : `white`};
    background-color: ${active ? `#fff` : `#8ac240`};
    font-size: 14px;

    &:hover {
      color: white;
      background-color: #8ac240;
      cursor: pointer;
    }
  `}
`;
