import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/fayyr-theme";

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>

    
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
