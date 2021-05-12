
import Image from 'next/image';
import { Button } from '@material-ui/core';


// All home page dmeo components will use styles from the Home.module for simplicity
import styles from '../styles/Home.module.css';

export default function PartnersA() {
  return (
    <div>

      <h3> our partners. </h3>

      {/* Row */}
      <div className={styles.flexColumnWrapper}>
        
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
      <div className={styles.flexColumnWrapper}>
        
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

      <div className={styles.centerContent}>
        <Button>
          See All
        </Button>
      </div>

    </div>

  )
}