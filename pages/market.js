import React from 'react';

import { Chip } from '@material-ui/core';

import styles from '../styles/Market.module.css';
import ArtCard from '../components/artCard';

import artData from './api/demoArt';
import causeData from './api/demoCauses.json';

class Market extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        {/* Title and filter expand */}
        <div>
          <h1> Market </h1>

        </div>

        {/* Quick filter by cause */}
        <div>
          <p> Causes:

            {causeData.map(data => (
              <Chip label={data} className={styles.causeChip} />
            ))}
          </p>

        </div>

        {/* Display Art */}
        <div className={styles.art}>
            {artData.map(data => (
              <div className={styles.card}>
                <ArtCard data = {data}/>
              </div>
            ))}
        </div>

      </div>
    );
  }
}

export default Market;
