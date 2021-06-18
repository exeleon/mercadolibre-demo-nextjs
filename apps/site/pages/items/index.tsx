import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import ItemCard from '../../components/ItemCard/ItemCard';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './items.module.scss';

type Data = {
  results: any[]
}

export function Items({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.page}>
      <Breadcrumbs />

      <div className={styles.list}>
        {data.results.slice(0, 5).map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("🚀 ~ file: items.tsx ~ line 35 ~ constgetServerSideProps:GetServerSideProps= ~ context", context.query)
  const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + context.query.search)
  const data: Data = await res.json()
  console.log("🚀 ~ file: index.tsx ~ line 32 ~ constgetServerSideProps:GetServerSideProps= ~ data", data.results[0].title)

  return {
    props: {
      data,
    },
  }
}

export default Items;