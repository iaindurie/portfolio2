import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
    headerFontFamily: [
      'Nunito Sans',
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
      'Nunito Sans',
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
    headerWeight: 700,
    bodyWeight: 300,
    googleFonts: [
      {
        name: 'Nunito Sans',
        styles: ['300','700'],
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