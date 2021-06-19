import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SearchResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import Breadcrumbs from '../../common/components/Breadcrumbs/Breadcrumbs';
import EmptyResults from '../../common/components/EmptyResults/EmptyResults';
import ItemCard from '../../common/components/ItemCard/ItemCard';
import styles from './index.module.scss';

export function Items({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Breadcrumbs categories={data.categories} />

      {data.items.length
        ? (
          <div className={styles.wrapper}>
            {data.items.map(item => (<ItemCard key={item.id} item={item} />))}
          </div>
        )
        : <EmptyResults />
      }
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: SearchResult }> = async (context) => {
  const res = await fetch('http://localhost:3333/api/items?q=' + context.query.search);
  const data: SearchResult = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Items;