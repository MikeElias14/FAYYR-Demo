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
        <Grid container justify="space-between" spacing={10}>
          {artData.map(data => (
            <Grid item key={data.id} xs={12} md={6} lg={4} className={styles.item}>
              <ArtCard data = {data}/>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Market;
