
import Link from 'next/link';
import { Button } from '@material-ui/core';

import styles from '../styles/AboutB.module.css';

export default function AboutB() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>What we do. </h1>
      <div className={styles.backgroundA}>

        <div className={styles.info}>
          <h6> Connecting two <br/> worlds </h6>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles.buttonWrapper}>
          <Button variant="outlined" color="secondary" className={styles.button}>
            <Link href='/market'> 
              <buttontext> Learn more </buttontext>
            </Link>
          </Button>
        </div>
      </div>  
    </div>
  )
}