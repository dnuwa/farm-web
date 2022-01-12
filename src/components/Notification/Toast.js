import styled, { css } from 'styled-components';

export const ToastContainer = styled.div`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },
      colors,
      light,
    },
  }) => css`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: ${spacing[4]};
    top: ${spacing[8]};
    z-index: 1;
  `}
`;
