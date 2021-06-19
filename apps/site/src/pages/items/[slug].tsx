import React from 'react';
import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { ItemResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import { Breadcrumbs, ErrorWrapper } from '../../common/components';
import { currencyFormat } from '../../common/utils';
import { styles } from '../../modules/itemDetail';

type ItemDetailProps = {
  statusCode: number,
  data: ItemResult
};

export function ItemDetail({ statusCode, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (statusCode !== 0) {
    return (
      <ErrorWrapper statusCode={statusCode} />
    );
  }

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
              {currencyFormat(data.item.price)}
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

export const getServerSideProps: GetServerSideProps<ItemDetailProps> = async (context) => {
  const res = await fetch('http://localhost:3333/api/items/' + context.params.slug);
  const statusCode = res.ok ? 0 : res.status;
  const data: ItemResult = await res.json();

  return {
    props: {
      statusCode,
      data,
    },
  };
}

export default ItemDetail;