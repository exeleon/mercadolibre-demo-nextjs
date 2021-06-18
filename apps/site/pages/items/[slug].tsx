import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './items.module.scss';

type Item = {
  id: string;
  title: string;
  thumbnail: string;
}

export function ItemDetail({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.page}>
      <Breadcrumbs />

      <div className={styles.detail}>
        <div className={styles.image}>
          <Image
            src={data.thumbnail}
            height="680px"
            width="680px"
            alt={data.title}
          />
        </div>

        <div className={styles.side_info}>
          <div className={styles.status}>
            <span>Nuevo - 234 vendidos</span>
          </div>
          <h1>{data.title}</h1>
          <div className={styles.price}>
            <span>$ 1.980</span>
          </div>
          <button className={styles.purchase_button}>Comprar</button>
        </div>

        <div className={styles.description}>
          <h2>Descripción del producto</h2>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos iusto cupiditate quo necessitatibus sunt illum, fuga enim, nam officiis odio autem qui itaque accusantium quidem fugit tenetur saepe! Qui.

          </p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("🚀 ~ file: items.tsx ~ line 35 ~ constgetServerSideProps:GetServerSideProps= ~ context", context.params)
  const res = await fetch('https://api.mercadolibre.com/items/' + context.params.slug)
  const data: Item = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default ItemDetail;