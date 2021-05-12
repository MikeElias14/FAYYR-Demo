import React from 'react'


import Grid from '@material-ui/core/Grid';

import styles from '../styles/Market.module.css'
import ArtCard from '../components/artCard'

import artData from './api/demoArt'

class Market extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.content}>
          {artData.map(data => (
            <div className={styles.card}>
              <ArtCard data = {data}/>
            </div>
          ))}
      </div>
    );
  }
}

export default Market;
