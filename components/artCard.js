import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaCheckCircle } from 'react-icons/fa';

import styles from '../styles/ArtCard.module.css';

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
          <div className={styles.inline}>
            <h2 className={styles.textOverflow}>{ data.title }</h2>
            <h3> { data.price } &nbsp;N&nbsp;</h3>
          </div>
          
          <p> By @{ data.artist }</p>
          <h4> <FaCheckCircle/> Supporting { data.charity } </h4>

        </div>
      </div>
    );
  }
}

export default ArtCard;