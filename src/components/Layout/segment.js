import styled, { css } from 'styled-components';

export const SegmentHeader = styled.div`
  ${({
    theme: {
      metrics: { spacing },
    },
    alignBottom,
  }) => css`
    margin: 0 0 ${spacing[2]};
    display: flex;
    flex-direction: row;
    margin-top: ${alignBottom ? `auto` : ''};
  `}
`;

export const SegmentTitle = styled.div`
  ${({
    theme: {
      colors,
      metrics: { spacing },
    },
  }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

//   overflow-y: scroll;
//   overflow-x: hidden;
