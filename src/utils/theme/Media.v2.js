// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  max: { min: 1584 },
  xlarge: { min: 1312, max: 1584 },
  large: { min: 1056, max: 1312 },
  medium: { min: 672, max: 1056 },
  small: { min: 320, max: 672 },
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSizeMin = sizes[label].min / 16;
  const emSizeMax = sizes[label].max ?? 1 / 16;
  accumulator[label] = (...args) => css`
    @media ${`(min-width: ${emSizeMin}em) ${sizes[label].max ? ` and (max-width: ${emSizeMax}em)` : ''}`} {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;

// // iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16;
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)};
//     }
//   `;
//   return accumulator;
// }, {});
