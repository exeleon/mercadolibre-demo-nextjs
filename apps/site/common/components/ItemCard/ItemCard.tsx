import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { SearchItem } from '@mercadolibre-demo-nextjs/api-interfaces';
import { numberFormat } from 'apps/site/common/utils/numberFormat';
import styles from './ItemCard.module.scss';

export function ItemCard({ item }: { item: SearchItem }) {
  return (
    <div className={styles.container}>
          <div className={styles.image}>
      <Link href={`/items/${item.id}`}>
        <a>
            <Image
              src={item.picture}
              height={180}
              width={180}
              alt={item.title}
            />
        </a>
      </Link>
          </div>

      <div className={styles.description}>
        <div className={styles.price_row}>
          <div className={styles.price_wrapper}>
            <span className={styles.price}>
              {numberFormat(item.price.amount, item.price.currency)}
              {item.price.decimals !== 0 && <sup>{item.price.decimals}</sup>}
            </span>
            {item.free_shipping && <img src="/images/ic_shipping.png" alt="Envío gratis" />}
          </div>
          <span className={styles.city}>{item.city}</span>
        </div>

        <Link href={`/items/${item.id}`}>
          <a className={styles.title}>
            <h2>{item.title}</h2>
          </a>
        </Link>

      </div>
    </div>
  );
}

export default ItemCard;
