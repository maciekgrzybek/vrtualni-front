import Typography from 'typography';
import { colours } from  '../constants/colours'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Oswald',
      styles: [
        '300',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '200',
        '400',
        '700'
      ],
    },
  ],
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  overrideStyles: ({adjustFontSizeTo, rhythm}, options, styles) => ({
    'h1,h2,h3,h4,h5.h6': {
      textTransform: 'uppercase'
    },
    a: {
      textDecoration: 'none',
    },
    'a:link': {
      color: colours.black
    },
    'a:visited': {
      color: colours.black
    },
    'a:hover': {
      color: colours.primary
    },
    'a:active': {
      color: colours.primary
    }
  })
});

export default typography
