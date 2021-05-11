
import React from 'react'
import Head from 'next/head'

import Header from './header'
import styles from '../styles/Layout.module.css'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className={styles.layout}>

        {/* Branding on browser tab */}
        <Head>
          <title>FAYYR</title>
        </Head>

      
        {/* Page layout */}
        <Header/>

        <div className={styles.content}>
          {children}
        </div>

    </div>
    );
  }
}

export default Layout;