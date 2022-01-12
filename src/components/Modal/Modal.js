import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Close20, Maximize16 } from '@carbon/icons-react';
import { get } from 'lodash';

import Media from 'utils/theme/Media.v2';
import { WIDTH_SIZE_MAP, MAX_HEIGHT_MAP } from './Sizes';

// todo
const SIZES = {
  xs: '100%',
  // small: '72%',
  small: '35%',
  default: '72%',
  large: '96%',
};

const Overlay = styled.div`
  ${({
    theme: {
      metrics: { spacing, miniUnit },
      colors,
    },
  }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: ${transparentize(0.35, "#161616")};
    backdrop-filter: blur(2px);
    content: '';
    z-index: 1000;
  `}
`;

const Content = styled.div`
  ${({
    theme: {
      metrics: { spacing, miniUnit },
      colors,
      fluid = false,
      fixedHeight = false,
    },
  }) => css`
    padding-left: ${spacing[5]};
    padding-right: ${spacing[5]};
    position: relative;
    ${fixedHeight
      ? ''
      : css`
          overflow-y: auto;
          max-height: 70vh;
        `}

    p {
      padding-right: ${fluid ? '' : '20%'};
      margin-right: -${spacing[5]};
    }

    .data-table {
      margin-left: -${spacing[4]};
      margin-right: -${spacing[4]};

      .data-table-header {
        margin-left: -${spacing[2]};
        margin-right: -${spacing[2]};
        padding-left: ${spacing[2]};
        padding-right: ${spacing[2]};
      }
      .data-table-row {
        margin-left: -${spacing[2]};
        margin-right: -${spacing[2]};
        padding-left: ${spacing[2]};
        padding-right: ${spacing[5]};
      }
    }
  `}
`;

const Container = styled.div`
  ${({
    theme: {
      metrics: { spacing, miniUnit },
      colors,
    },
    size,
    dark = false,
  }) => css`
    position: relative;
    margin: auto;
    /* todo: mobile optimize */
    width: ${WIDTH_SIZE_MAP.max[size]};

    ${Content} {
      max-height: ${MAX_HEIGHT_MAP[size]};
    }

    ${Media.small`
      width: ${WIDTH_SIZE_MAP.small[size]};
      margin:auto auto 0;
    `}

    ${Media.medium`
      width: ${WIDTH_SIZE_MAP.medium[size]};
      margin:auto;
    `}

    ${Media.large`
      width: ${WIDTH_SIZE_MAP.large[size]};
      margin:auto;
    `} 

    ${Media.xlarge`
      width: ${WIDTH_SIZE_MAP.xlarge[size]};
      margin:auto;
    `}

    ${Media.max`
      width: ${WIDTH_SIZE_MAP.max[size]};
      margin:auto;
    `}


    background-color: ${dark ? "#262626" : "#393939"};
    color: ${"#f4f4f4"};
  `}
`;

const ModalContainer = forwardRef(({ size = 'default', children, dark = false, open = false }, ref) => {
  return (
    <Overlay ref={ref}>
      <Container size={size} dark={dark}>
        {children}
      </Container>
    </Overlay>
  );
});

ModalContainer.prototype = {
  size: PropTypes.oneOf([...Object.keys(SIZES)]),
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  dark: PropTypes.bool,
};

const Title = styled.h2`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size: textSize, font, weight },
      },
      colors,
    },
  }) => css`
    display: block;
    margin: 0;
    padding: 0;
    color: ${"#f4f4f4"};
    font-family: ${font['sans']};
    font-size: ${textSize['04']};
    font-weight: ${weight['regular']};
    line-height: 1em;
  `}
`;

const Label = styled.span`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size: textSize, font, weight },
      },
      colors,
    },
  }) => css`
    display: block;
    margin: 0;
    padding: 0;
    color: ${"#f4f4f4"};
    font-family: ${font['sans']};
    font-size: ${textSize['01']};
    font-weight: ${weight['regular']};
    margin-bottom: ${spacing[2]};
  `}
`;

const Close = styled.button`
  ${({
    theme: {
      metrics: { spacing, miniUnit },
      colors,
    },
  }) => css`
    transition: all ease 0.25s;
    background-color: transparent;
    outline: 1px solid transparent;
    outline-offset: -1px;
    border: none;
    border-radius: 1px;
    cursor: pointer;
    padding: ${spacing[3]};

    &:hover {
      background-color: ${colors['hover-ui']};
    }

    &:active,
    &:focus {
      outline: 1px solid ${({ theme: { colors } }) => colors['focus']};
      outline-offset: -1px;
    }

    svg {
      fill: ${"#f4f4f4"};
    }
  `}
`;

const CloseIcon = forwardRef((p, ref) => (
  <Close {...p} ref={ref}>
    <Close20 />
  </Close>
));

CloseIcon.propTypes = {};

const Header = styled.div`
  ${({
    theme: {
      metrics: { spacing, miniUnit },
      colors,
    },
  }) => css`
    margin-right: 20%;
    padding-top: ${spacing[5]};
    margin-bottom: ${spacing[5]};
    padding-left: ${spacing[5]};

    ${Close} {
      position: absolute;
      top: 0;
      right: 0;
    }
  `}
`;

const Footer = styled.div`
  ${({
    theme: {
      metrics: { spacing, miniUnit },
      colors,
    },
  }) => css`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    margin-top: 3rem;
    button {
      width: 50%;
    }
  `}
`;

export const Modal = {
  ModalContainer,
  CloseIcon,
  Header,
  Content,
  Title,
  Label,
  Footer,
};
