import React from 'react';
import Image from 'next/image';

import { Card, CardContent } from '@material-ui/core';

import styles from '../styles/ArtCard.module.css'

class ArtCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <Card>
        <CardContent>
          
          {/* Art */}
          <Image
            src={data.src}
            layout="intrinsic"
            height={500}
            width={500}
            />

          {/* Info */}
          <div className={styles.info}>
            <h4>{ data.title }</h4>
            <h4>{ data.artist }</h4>
            <h4>{ data.charity }</h4>
            <h4>{ data.price }</h4>
            <p> { data.desc} </p>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ArtCard;