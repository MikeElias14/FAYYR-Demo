import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/ArtDetails.module.css';
import ArtCard from '../../components/artCard'

// TODO: Using all data and choosing the correct id for now. Final implementation should pass the art object as props through the router.
import artData from '../api/demoArt.json';
import { Button } from '@material-ui/core';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


// function component instead of Class since needs to use router hook
function ArtDetails() {
  const router = useRouter();
  const pid = parseInt(router.query.pid) || 0; // TODO: || 0 is a fix for reloading bug caused by lazy route handling

// TODO: Using all data and choosing the correct id for now. Final implementation should pass the art object as props through the router.
  const allArt = artData;
  const data = allArt.filter(obj => obj.id === pid)[0];
  const demoArt = artData.slice(0, 3);

  // Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

      
      {/* TODO: functionality for button */}
      {/* Back button */}
      <Link href='/market'>
        <p>
          Market / {data.title}
        </p>
        </Link>
    
      <div className={styles.wrapper}>

        {/* Row: Art and its info */} 
        <div className={styles.flexRow}>

          {/* Column: Art itself */}
          <div className={styles.artColumn}>
            <Image
                  src={data.src}
                  layout="intrinsic"
                  height={data.height}
                  width={data.width}
                  />
          </div>

          {/* Column: Art info */}
          <div className={styles.infoColumn}>
            
              <h6> { data.title } </h6>

              <div className={styles.inline}>
                <h2> { data.price }&nbsp;N&nbsp;&nbsp; </h2>  
                
                <h3> (${ data.price * 5 } USD) </h3>
              </div>

              <h5> By { data.artist } </h5>

            <div className={styles.desc}>
              <p> { data.desc } </p>
            </div>

            <Button variant="contained" color="secondary" className={styles.button}>
              Donate Now
            </Button>

            {/* Tabbed selection */}
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="About the charity" {...a11yProps(0)} />
              <Tab label="History" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <p><b> { data.charity } </b></p>

              <p>
              Phasellus ut faucibus nisi. Ut a turpis varius, blandit lectus non, hendrerit justo. Phasellus posuere eros ante, in vestibulum justo viverra et. Nunc id urna sit amet nulla imperdiet vehicula.
              </p>

              <p><b> Learn More </b></p>
            </TabPanel>

            <TabPanel value={value} index={1}>
              NFT History... TODO
            </TabPanel>
          </div>
          
        </div>

        {/* Row: Other art */}
        <div className={styles.flexRow}>

          {/* Display Art */}
          <div className={styles.moreArt}>
              {demoArt.map(data => (
                <div className={styles.card}>
                  <ArtCard data = {data}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>


  )
}

export default ArtDetails;