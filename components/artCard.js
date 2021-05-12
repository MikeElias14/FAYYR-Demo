import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/ArtCard.module.css'

class ArtCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.card}>
          
        {/* Art */}
        <Link href={`/market/${data.id}`}>
          <Image
            src={data.src}
            layout="intrinsic"
            height={data.height}
            width={data.width}
            />
          </Link>

        {/* Info */}
        <div className={styles.info}>
          <h3>{ data.title }</h3>
          <p>{ data.artist }</p>
          <p> <b>{ data.price } N </b> - ${ data.price * 5 } to { data.charity } </p>
        </div>
      </div>
    );
  }
}

export default ArtCard;