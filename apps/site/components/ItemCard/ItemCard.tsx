import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import styles from './ItemCard.module.scss';

export function ItemCard({ item }) {
  return (
    <div className={styles.container}>
      <Link href={`/items/${item.id}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={item.thumbnail}
              height={180}
              width={180}
              alt={item.title}
            />
          </div>
        </a>
      </Link>

      <div className={styles.description}>
        <div className={styles.price_wrapper}>
          <span className={styles.price}>$5965</span>
          <span className={styles.city}>Mendozxa</span>
        </div>

        <Link href={`/items/${item.id}`}>
          <a>
            <h2 className={styles.title}>{item.title}</h2>
          </a>
        </Link>

      </div>
    </div>
  );
}

export default ItemCard;
