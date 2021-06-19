import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SearchResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import Breadcrumbs from '../../common/components/Breadcrumbs/Breadcrumbs';
import EmptyResults from '../../common/components/EmptyResults/EmptyResults';
import ErrorWrapper from '../../common/components/ErrorWrapper/ErrorWrapper';
import ItemCard from '../../common/components/ItemCard/ItemCard';
import styles from './index.module.scss';

type ItemsProps = {
  statusCode: number,
  data: SearchResult
};

export function Items({ statusCode, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (statusCode !== 0) {
    return (
      <ErrorWrapper statusCode={statusCode} />
    );
  }
  
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

export const getServerSideProps: GetServerSideProps<ItemsProps> = async (context) => {
  const res = await fetch('http://localhost:3333/api/items?q=' + context.query.search);
  const statusCode = res.ok ? 0 : res.status;
  const data: SearchResult = await res.json();

  return {
    props: {
      statusCode,
      data,
    },
  };
}

export default Items;