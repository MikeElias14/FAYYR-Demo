
import React from 'react'

import Link from 'next/link'

// Material-ui imports
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";

import styles from '../styles/Header.module.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      // <AppBar> TODO: this makes the bar have 0 height, but makes it sticky. is there another way to make it sticky?
        <Toolbar className={styles.flexContainer}>

          {/* Branding - Left */}
          <div className={styles.branding}>
            <h2>
              <Link href='/'>
                FAYYR
              </Link>
            </h2>
          </div>

          {/* Navigation - Right */}
          <div className={styles.navigation}>
              <Button>
                <Link href='/market'>
                  Market
                </Link>
              </Button>
            
            <Button>
              Charities
            </Button>

            <Button>
              Sign In
            </Button>
          </div>

        </Toolbar>
      // </AppBar>
    );
  }
}

export default Header