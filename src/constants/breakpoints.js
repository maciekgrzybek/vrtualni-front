const {css} = require('styled-components');

const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1440
};

export const media = Object.keys(breakpoints).reduce((sizes, label) => {
  sizes[label] = (...args) => (css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `);

  return sizes;
},{});


