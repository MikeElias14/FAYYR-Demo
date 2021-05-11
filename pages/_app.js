import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "../components/layout";
import theme from "../styles/fayyr-theme";

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  )
}

export default MyApp
