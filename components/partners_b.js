
import Image from 'next/image';
import { Button } from '@material-ui/core';

import styles from '../styles/PartnersB.module.css';

export default function PartnersB() {
  return (
    <div className={styles.wrapper}>

      <h1> Our partners. </h1>

      {/* Row */}
      <div className={styles.flexColumnWrapper}>
        
        <div className={styles.flexColumn}>
          <Button variant="outlined" color="secondary" className={styles.imageButton}>
            <Image
              src='/redCrossLogo.png'
              layout="intrinsic"
              height={80}
              width={134}
              />
          </Button>
        </div>

        <div className={styles.flexColumn}>
          <Button variant="outlined" color="secondary" className={styles.imageButton}>
            <Image
              src='/salvationArmyLogo.png'
              layout="intrinsic"
              height={80}
              width={119}
              />
            </Button>
        </div>

        <div className={styles.flexColumn}>
          <Button variant="outlined" color="secondary" className={styles.imageButton}>
            <Image
              src='/foodBankLogo.png'
              layout="intrinsic"
              height={80}
              width={152}/> 
          </Button>
        </div>

        <div className={styles.flexColumn}>
          <Button variant="outlined" color="secondary" className={styles.imageButton}>
            <Image
              src='/canadianBloodLogo.png'
              layout="intrinsic"
              height={81}
              width={280}
              />
          </Button>
        </div>

      </div>

      <div className={styles.buttonWrapper}>
        <Button variant="outlined" color="secondary" className={styles.button}>
          <buttontext> See all </buttontext>
        </Button>
      </div>

    </div>

  )
}