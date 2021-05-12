
import { Button } from '@material-ui/core';


// All home page dmeo components will use styles from the Home.module for simplicity
import styles from '../styles/Home.module.css';

export default function IntroA() {
  return (
    <div>

      <div>

        <h1 className={styles.phrase}>
          <b> art that makes <br/> a </b> <i>difference</i>
        </h1>
        <Button> 
          Start your collection
        </Button>

      </div>
    </div>
  )
}