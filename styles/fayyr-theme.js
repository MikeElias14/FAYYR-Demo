import { createMuiTheme } from '@material-ui/core/styles';

import { grey, red, amber } from '@material-ui/core/colors';




const theme = createMuiTheme({

  palette: {

    primary: {

      main: red[500],

    },

    secondary: {

      main: amber[500],

      contrastText: red[900],

    },

  },

});

export default theme;