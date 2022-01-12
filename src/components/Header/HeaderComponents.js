import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const ParentHeaderComponent = styled.div.attrs({
  className: `w-100`,
})`
  background-color: #ffffff;
  font-family: ${`'Roboto'`};
`;

export const HeaderContainer = styled.div.attrs({
  className: `container`,
})`
  background-color: #ffffff;
  font-family: ${`'Roboto'`};
  padding: 16px 0;
  ${Media.phone`
      /* display: none; */
      padding: 6px;
    `}

  ${Media.tablet`
      /* display: none; */
      padding: 6px;
    `}

  ${Media.giant`
    /* display: none; */
    padding: 6px;
  `}
`;

export const HeaderWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  padding: 0 0 12px 0;
`;

export const SiteLogo = styled.img`
  background-position: center;
  background-size: cover;
  height: 45px;
`;

export const PartnerSiteLogo = styled.img`
  background-position: center;
  background-size: cover;
  height: 45px;
  background-color: black;
  padding: 0 0 0 10px;
  margin: 0 0 0 10px;

  ${Media.phone`
      display: none; 
    `}

  ${Media.tablet`
      display: none; 
    `}

  ${Media.giant`
    display: none;
  `}
`;

export const HeaderLinksWrapper = styled.div.attrs({
  className: `d-flex flex-row mt-auto ml-auto mr-auto mt-auto flex-wrap`,
})`
  font-family: ${`'Roboto'`};
  ${Media.phone`
      display: none !important;
    `}

  ${Media.tablet`
      display: none !important;
    `}

  ${Media.giant`
    display: none !important;
  `}
`;

export const HeaderLink = styled.div.attrs({
  className: `d-flex flex-row`,
})`
  font-size: 13px;
  font-weight: 600;
  padding: 0 24px;
  color: #333439;
  font-family: ${`'Roboto'`};

  &:hover {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.form.attrs({
  className: `d-flex`,
})`
  margin: auto;
  width: 60%;
  ${Media.phone`
       width: 90%;
    `}

  ${Media.tablet`
       width: 90%;
    `}

  ${Media.giant`
     width: 90%;
  `}
`;

export const ServiceSelect = styled.select.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  border: 3px solid #8ac240;
  padding: 6px 12px;
  border-radius: 5px 0 0 5px;
  color: #4c4c4c;

  ${Media.phone`
    padding: 4px;
    font-size: 8px;
  `}

  ${Media.tablet`
    padding: 4px;
    font-size: 8px;
  `}

  ${Media.giant`
    padding: 4px;
    font-size: 8px;
  `}
`;

const TextInputWrapper = styled.input.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  border-top: 3px solid #8ac240;
  border-bottom: 3px solid #8ac240;
  border-left: transparent;
  border-right: transparent;
  padding: 4px 20px;
  font-size: 13px;
  width: 60%;

  ${Media.phone`
    padding: 4px;
    font-size: 8px;
  `}

  ${Media.tablet`
    padding: 4px;
    font-size: 8px;
  `}

  ${Media.giant`
    padding: 4px;
    font-size: 8px;
  `}
`;

export const SearchInput = ({ placeholder, value = '', onChangeValue = false }) => (
  <TextInputWrapper placeholder={placeholder} onChange={e => onChangeValue(e.target.value)} value={value} />
);

export const SearchButton = styled.button.attrs({
  className: `col-2 p-0`,
})`
  align-items: center;
  border: 3px solid #8ac240;
  border-radius: 0 5px 5px 0;
  color: white;
  background-color: #8ac240;
  font-weight: bold;
  font-family: ${`'Roboto'`};
  cursor: pointer;

  > svg {
    margin: 0 4px 0 0;
    /* display: none; */
  }

  ${Media.phone`
    font-size: 8px;
    > svg {
    display: none;
  }
  `}

  ${Media.tablet`
    font-size: 8px;
  `}

  ${Media.giant`
    font-size: 8px;
  `}
`;

export const LowerHeader = styled.div.attrs({
  className: `d-flex`,
})`
  margin: 4px 0;
  font-family: ${`'Roboto'`};
`;

export const UserAccountSection = styled.div.attrs({
  className: `d-flex ml-auto`,
})`
  /* width: 25%; */
  font-family: ${`'Roboto'`};

  ${Media.phone`
      display: none !important;
    `}

  ${Media.tablet`
      display: none !important;
    `}

  ${Media.giant`
    display: none !important;
  `}
`;

export const AccountDropButton = styled.a`
  display: flex;
  color: #333439;
  align-items: center;
  font-family: ${`'Roboto'`};

  &:hover {
    color: #8ac240;
    cursor: pointer;
  }
`;

export const IconText = styled.p.attrs({
  className: `m-0`,
})`
  font-family: ${`'Roboto'`};
`;

export const MobileMenu = styled.div`
  ${({ right = false }) => css`
    display: none;
    font-family: ${`'Roboto'`};

    ${Media.phone`
    display: flex;
    margin: ${right ? `0 0 0 auto` : `0`};
    >svg{
      margin: auto 16px;
    }

    &:hover{
      cursor: pointer;
    }
  `}

    ${Media.tablet`
    display: flex;
    >svg{
      margin: auto 16px;
    }
    &:hover{
      cursor: pointer;
    }    
  `}

  ${Media.giant`
    display: flex;
    >svg{
      margin: auto 16px;
    }
    &:hover{
      cursor: pointer;
    }    
  `}
  `}
`;

export const MobileMenuContent = styled.div`
  ${({ open = false, right = false }) => css`
    display: none;
    z-index: ${open ? 1 : -1};
    /* z-index: 1; */
    position: fixed;
    width: 70%;
    left: ${right ? 1 : 0};
    right: 0;
    bottom: 0;
    top: 0;
    padding: 16px;
    background-color: white;
    color: #333;
    overflow: auto;
    font-family: ${`'Roboto'`};
    ${Media.phone`
      display: flex;
      flex-direction: column;
    `}

    ${Media.tablet`
      display: flex;
      flex-direction: column;
    `}

    ${Media.giant`
      display: flex;
      flex-direction: column;
    `}
  `}
`;

export const NavLink = styled.div.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  padding: 8px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
  font-size: 19px;
  padding: 16px;
  font-family: ${`'Roboto'`};
`;

export const Close = styled.div`
  ${({ right = false }) => css`
    margin: ${right ? `8px 16px 16px auto` : ``};
  `}
`;

export const CategoryTitle = styled.div.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
  padding: 8px 16px;
  font-weight: bold;
`;

export const SubCategory = styled.div`
  padding: 0 12px;
  font-family: ${`'Roboto'`};
`;
