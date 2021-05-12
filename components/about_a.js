
import { Button } from '@material-ui/core';


// All home page dmeo components will use styles from the Home.module for simplicity
import styles from '../styles/Home.module.css';

export default function AboutA() {
  return (
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
  )
}