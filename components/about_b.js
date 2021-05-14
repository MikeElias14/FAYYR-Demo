
import Link from 'next/link';
import { Button } from '@material-ui/core';

import styles from '../styles/AboutB.module.css';

export default function AboutB() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What we do. </h1>
      <div className={styles.backgroundA}>

        <div className={styles.info}>
          <h6> Connecting two <br/> worlds </h6>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="outlined" color="secondary" className={styles.button}>
            <Link href='/market'> 
              <h7> Learn more </h7>
            </Link>
          </Button>
        </div>
      </div>  
    </div>
  )
}