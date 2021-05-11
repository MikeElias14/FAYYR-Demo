import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../../styles/ArtDetails.module.css';

// TODO: Using all data and choosing the correct id for now. Final implementation should pass the art object as props through the router.
import artData from '../api/demoArt.json';

// function component instead of Class since needs to use router hook
function ArtDetails() {
  const router = useRouter();
  const pid = parseInt(router.query.pid) || 0; // TODO: || 0 is a fix for reloading bug caused by lazy route handling

// TODO: Using all data and choosing the correct id for now. Final implementation should pass the art object as props through the router.
  const allArt = artData;
  const data = allArt.filter(obj => obj.id === pid)[0];

  return (
    
    <div className={styles.wrapper}>

      {/* Row: Art and its info */} 
      <div className={styles.flexRow}>

        {/* Column: Art info */}
        <div className={styles.column}>
          <h2> { data.title } </h2>
          <p> { data.desc } </p>
        </div>

        {/* Column: Art itself */}
        <div className={styles.column}>
          <Image
                src={data.src}
                layout="intrinsic"
                height={500}
                width={500}
                />
        </div>
        

        {/* Column More art info and charity info */}
        <div className={styles.column}>
          <h4> Artist: { data.artist } </h4>
          <h4> This art supports: { data.charity } </h4>
        </div>

      </div>

      {/* Row: Less importiant details */}
      <div lassName={styles.flexRow}>

        {/* Column: Art history */}
        <div>
          <p>row 2 </p>
        </div>


      </div>
        
          
    </div>


  )
}

export default ArtDetails;