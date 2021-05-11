import React from 'react';

import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "../components/layout";
import theme from "../styles/fayyr-theme";

import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS. Material with Next optimization.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  )
}
