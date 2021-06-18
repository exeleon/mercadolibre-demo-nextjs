import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { SearchItem } from '@mercadolibre-demo-nextjs/api-interfaces';
import { numberFormat } from 'apps/site/common/utils/number-format';
import styles from './ItemCard.module.scss';

export function ItemCard({ item }: { item: SearchItem }) {
  return (
    <div className={styles.container}>
      <Link href={`/items/${item.id}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={item.picture}
              height={180}
              width={180}
              alt={item.title}
            />
          </div>
        </a>
      </Link>

      <div className={styles.description}>
        <div className={styles.price_row}>
          <div className={styles.price_wrapper}>
            <span className={styles.price}>{numberFormat(item.price.amount, item.price.currency)}</span>
            {item.free_shipping && <img src="/images/ic_shipping.png" />}
          </div>
          <span className={styles.city}>{item.city}</span>
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
