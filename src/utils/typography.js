import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
    headerFontFamily: [
      'Arimo',
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
      'Arimo',
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
    bodyWeight: 400,
    googleFonts: [
      {
        name: 'Arimo',
        styles: ['400','700'],
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