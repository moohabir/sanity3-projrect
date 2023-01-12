import { createTheme } from '@mui/material';
import { orange, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      node: 'dark',
      //main: orange[500],
      main: '#fff',
    },
    secondary: {
      main: blue[500],
    },
  },
});
export default theme;
