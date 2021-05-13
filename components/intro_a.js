
import Link from 'next/link';
import { Button } from '@material-ui/core';

import styles from '../styles/InfoA.module.css';

export default function IntroA() {
  return (
    <div className={styles.backgroundA}>
      <div className={styles.h1}>
        Art that makes <br/> a <i className={styles.i}>difference</i>

      <div className={styles.buttonWrapper}>
        <Button variant="outlined" color="secondary" className={styles.button}>
          <Link href='/market'> 
            <buttontext> Start your collection </buttontext>
          </Link>
        </Button>
      </div>

      </div>

    </div>
  )
}