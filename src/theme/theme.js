import { createTheme } from '@mui/material';
import '@fontsource/outfit';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Outfit',
      'sans-serif'
    ].join(','),
    button: {
      textTransform: 'none',
      fontSize: '1.2rem'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;