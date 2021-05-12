import Image from 'next/image';


import { Button } from '@material-ui/core';

import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>

      {/* Main section */}
      <div>

        {/* phrase/collection wrapper */}
        <div>

          <h1 className={styles.phrase}>
            <b> art that makes <br/> a </b> <i>difference</i>
          </h1>
          <Button> 
            Start your collection
          </Button>

        </div>
      </div>

      {/* About section */}
      <div>

        <h3> what we do. </h3>

        <div className={styles.flexColumnWrapper}>
          
          <div className={styles.flexColumn}>
            <h4> supporting charity </h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor at neque finibus scelerisque sit amet sit amet massa. Morbi scelerisque venenatis purus.
            </p>
          </div>

          <div className={styles.flexColumn}>
            <h4> working with artists </h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor at neque finibus scelerisque sit amet sit amet massa. Morbi scelerisque venenatis purus.
            </p>
          </div>

          <div className={styles.flexColumn}>
            <h4> eco-friendly </h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor at neque finibus scelerisque sit amet sit amet massa. Morbi scelerisque venenatis purus.
            </p>
          </div>

        </div>

        <div className={styles.centerContent}>
          <Button>
            Learn More
          </Button>
        </div>
      </div>


      {/* Partners Section */}
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



    </div>
  )
}
