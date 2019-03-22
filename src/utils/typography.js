import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.66,
    headerFontFamily: [
      'Libre Franlin',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
    bodyFontFamily: [
      'Libre Franlin',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
    headerWeight: 400,
    bodyWeight: 300,
    googleFonts: [
      {
        name: 'Libre Franlin',
        styles: ['300','600'],
      }
    ],
    overrideStyles: () => ({
      img: {
        marginBottom: 0,
      },
    }),
  })

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };