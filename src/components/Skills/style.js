import { createTheme } from '@mui/material';
import { orange, blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      mode: 'dark',
      main: orange[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});
export default theme;
