
import React from 'react';
import { GoSearch } from 'react-icons/go';

import Link from 'next/link';
import Image from 'next/image';

// Material-ui imports
import { Toolbar, Button } from "@material-ui/core";

import styles from '../styles/Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
     
      // Wrapper allows for bottom line
      <div className={styles.wrapper}>

        {/* Toolbar acts as flex container */}
        <Toolbar className={styles.toolbar}>

          {/* Branding - Left */}
          <div className={styles.branding}>
            <h2>
              <Link href='/'>
                <Image
                  src='/fayyrLogo_a.svg'
                  layout="intrinsic"
                  height={28}
                  width={66}
                  />
              </Link>
            </h2>
          </div>

          {/* Navigation - middle */}
          <div className={styles.navigation}>

            <div className={styles.headerButton}>
              <Button>
                <Link href='/market'>
                  <h5> Market </h5>
                </Link>
              </Button>
            </div>

            <div className={styles.headerButton}>
              <Button>
                <h5> Charities </h5>
              </Button>
            </div>

            <div className={styles.headerButton}>
              <Button>
                <h5> About </h5>
              </Button>
            </div>
          </div>

          {/* Search - left */}
          <div className={styles.search}>
            <Button>
              <GoSearch size="1.5em"/>
            </Button>
          </div>

        </Toolbar>

      </div>
    );
  }
}

export default Header