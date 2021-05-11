import { createMuiTheme } from '@material-ui/core/styles';

import { grey } from '@material-ui/core/colors';




const theme = createMuiTheme({

  // Color palette
  palette: {

    primary: {

      main: grey[50],

    },

    secondary: {

      main: grey[900],

      contrastText: grey[50],

    },

  },

  // Overrides

  overrides: {

    // Mui Card overrides
    MuiCardContent: {
      root: {
        padding: "0px"
      }
    }
  }

});

export default theme;