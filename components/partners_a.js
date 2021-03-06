
import Image from 'next/image';
import { Button } from '@material-ui/core';

import styles from '../styles/PartnersA.module.css';

export default function PartnersA() {
  return (
    <div className={styles.container}>

      <h1> Our partners. </h1>

      {/* Row */}
      <div className={styles.flexColumnContainer}>
        
        <div className={styles.flexColumn}>
          <Image
                  src='/redCrossLogo.png'
                  layout="intrinsic"
                  height={167}
                  width={280}
                  />
        </div>

        <div className={styles.flexColumn}>
        <Image
                  src='/salvationArmyLogo.png'
                  layout="intrinsic"
                  height={188}
                  width={280}
                  />
        </div>

        <div className={styles.flexColumn}>
        <Image
                  src='/foodBankLogo.png'
                  layout="intrinsic"
                  height={147}
                  width={280}
                  />
        </div>

      </div>

      {/* Row */}
      <div className={styles.flexColumnContainer}>
        
        <div className={styles.flexColumn}>
          <Image
                  src='/TSOLogo.png'
                  layout="intrinsic"
                  height={63}
                  width={280}
                  />
        </div>

        <div className={styles.flexColumn}>
        <Image
                  src='/canadianBloodLogo.png'
                  layout="intrinsic"
                  height={81}
                  width={280}
                  />
        </div>

      </div>

      <div className={styles.buttonContainer}>
        <Button variant="outlined" color="secondary" className={styles.button}>
          <h7> See all </h7>
        </Button>
      </div>

    </div>

  )
}