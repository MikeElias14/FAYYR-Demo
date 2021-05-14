
import Link from 'next/link';
import { Button } from '@material-ui/core';

import styles from '../styles/FeatureA.module.css';

export default function FeatureA() {
  return (
    <div className={styles.container}>
      <h1> Featured Art. </h1>
      <div className={styles.backgroundA}>

        <div className={styles.info}>
          <h6> From around the <br/> world </h6>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="outlined" color="secondary" className={styles.button}>
            <Link href='/market'> 
              <h7> See collection </h7>
            </Link>
          </Button>
        </div>
      </div>  
    </div>
  )
}