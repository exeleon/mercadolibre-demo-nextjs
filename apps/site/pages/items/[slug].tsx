import React from 'react';
import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { ItemResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import { numberFormat } from '../../common/utils/numberFormat';
import Breadcrumbs from '../../common/components/Breadcrumbs/Breadcrumbs';
import styles from './slug.module.scss';

export function ItemDetail({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Breadcrumbs categories={data.categories } />

      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src={data.item.picture}
            height="680px"
            width="680px"
            alt={data.item.title}
          />
        </div>

        <div className={styles.sidebar}>
          <div className={styles.status}>
            <span>{data.item.condition === 'new' ? 'Nuevo' : 'Usado'} - {data.item.sold_quantity} vendidos</span>
          </div>
          <h1>{data.item.title}</h1>
          <div className={styles.price}>
            <span>
              {numberFormat(data.item.price.amount, data.item.price.currency)}
              {data.item.price.decimals !== 0 && <sup>{data.item.price.decimals}</sup>}
            </span>
          </div>
          <button className={styles.purchase_button}>Comprar</button>
        </div>

        <div className={styles.description}>
          <h2>Descripción del producto</h2>
          <p>{data.item.description}</p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: ItemResult }> = async (context) => {
  const res = await fetch('http://localhost:3333/api/items/' + context.params.slug);
  const data: ItemResult = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default ItemDetail;