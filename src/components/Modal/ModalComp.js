import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Media } from 'utils/theme';
import { Close24 } from '@carbon/icons-react';

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OverlayContainer = styled.div.attrs(() => ({
  className: `d-flex col`,
}))`
  position: fixed;
  background-color: ${transparentize(0.5, `black`)};
  z-index: 500000;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const ContentWrapper = styled.form.attrs(() => ({
  className: `d-flex flex-column `,
}))`
  width: 40vw;
  background-color: white;
  border-radius: 2px;
  margin: 35px auto auto auto;

  ${Media.giant`
        width: 40vw;
    `}

  ${Media.tablet`
        width: 60vw;
    `}

    ${Media.phone`
        width: 90vw;
    `}
`;

export const Header = styled.div.attrs(() => ({
  className: `d-flex flex-column`,
}))`
  ${({
    theme: {
      colors,
      metrics: { base, font },
    },
  }) => css`
    padding: ${base * 2}px;
    margin: 0;
    position: relative;
    font-family: ${`'Roboto'`};
    p {
      margin: 0;
    }
    .header-title {
      font-weight: 500;
      color: #717070;
      font-size: 18px;
      /* font-size: 16px; */
      /* line-height: ${font.large}px; */
    }
    .header-subtitle {
      color: #a3a3a3;
      font-size: 4px;
      margin-top: ${8 * 0.5}px;
    }
  `}
`;

export const CloseIcon = styled(Close24).attrs(() => ({
  className: '',
}))`
  transition: all ease 0.25s;
  cursor: pointer;
  color: #979797;
  position: absolute;
  top: 8px;
  right: 8px;
  &:hover {
    cursor: pointer;
    background: #979797;
    color: white;
    transition: 1s;
    border-radius: 2px;
  }
`;

export const MBody = styled.div.attrs(() => ({
  className: `d-flex flex-column`,
}))`
  ${({
    theme: {
      metrics: { base, font },
    },
  }) => css`
    padding: 0 ${8 * 2}px;
    margin: 0;
  `}
`;

export const ModalFooter = styled.div.attrs(() => ({
  className: `d-flex flex-row-reverse`,
}))`
  ${({
    theme: {
      metrics: { base },
    },
  }) => css`
    padding: ${8 * 2}px;
  `}
`;

export const InnerWrapper = styled.div.attrs(() => ({
  className: `d-flex flex-row-reverse`,
}))`
  ${({
    theme: {
      metrics: { base },
    },
  }) => css`
    width: 50%;

    .btn-success- {
      color: #fff;
      background-color: #5cb85c;
      border: 1px solid #4cae4c;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      padding: 6px 12px;
      font-size: 14px;
      border-radius: 4px;
    }

    .btn-sec- {
      color: #333;
      background-color: #fff;
      border: 1px solid #ccc;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      padding: 6px 12px;
      font-size: 14px;
      margin-right: 16px;
      border-radius: 4px;
    }

    ${Media.phone`
      width: 100%;
    `}
  `}
`;

export const SignUpForContainer = styled.div.attrs(() => ({
  className: `d-flex flex-row align-items-center justify-content-between flex-wrap`,
}))`
  ${({
    theme: {
      metrics: { base },
    },
  }) => css`
    padding: ${8 * 2}px ${8 * 2}px 0;

    .m-top {
      margin-bottom: ${8 * 2}px;
    }
  `}
`;

export const LabelBtnWrapper = styled.div.attrs(() => ({
  className: `d-flex flex-column col-6 p-0`,
}))``;

export const BtnLabel = styled.p`
  margin: 0;
  padding: 0;
  color: #838383;
`;

export const HelpText = styled.p.attrs(() => ({
  className: `d-flex `,
}))`
  ${({
    theme: {
      colors,
      metrics: { base, font },
    },
  }) => css`
    margin: ${8 * 2}px ${8 * 2}px 0;
    color: black;
    font-size: ${font.tiny}px;
    font-family: ${`'Roboto'`};
  `}
`;

export const InquieryContainer = styled.div.attrs(() => ({
  className: `d-flex flex-column align-items-center`,
}))`
  ${({
    theme: {
      metrics: { base },
    },
  }) =>
    css`
      padding: 0;
      margin: 0;
      font-family: ${`'Roboto'`};

      @media (min-width: 768px) and (max-width: 991.5px) {
        margin-bottom: ${base * 3}px;
      }

      ${Media.tablet`
        margin-bottom: ${base * 3}px; 
      `}

      ${Media.phone`
        margin-bottom: ${base * 3}px; 
      `}
    `}
`;

export const ModalLabel = styled.div`
  margin-bottom: 5px;
  margin-top: 8px;
  font-weight: 700;
  font-family: ${`'Roboto'`};
`;

export const ModalLink = styled.span`
  font-size: 14px;
  color: #23527c;
  font-family: ${`'Roboto'`};
  padding: 16px 0;
`;
