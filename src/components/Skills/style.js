import { createTheme } from '@mui/material';
import { orange, blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      mode: 'dark',
      main: '#ffff',
    },
    secondary: {
      main: '#3333',
    },
  },
});
export default theme;
