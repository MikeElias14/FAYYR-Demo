import React from 'react'

import styles from '../styles/Market.module.css'

import Header from '../components/header'
import ArtCard from '../components/artCard'

import artData from '../demoArt'

import Grid from '@material-ui/core/Grid';



class Market extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className={styles.container}>

        <Header/>
        {/* {artData.map(data => <p>{data.title}</p>)} */}

        <Grid container justify="center" spacing={3}>
          {artData.map(data => (
            <Grid item> {/*Add: key={data.title}     - This needs to be unique though, so doesnt work with current sample data */}
              <ArtCard data = {data}/>
            </Grid>
          ))}
        </Grid>

      </div>

    );
  }
}

export default Market;
