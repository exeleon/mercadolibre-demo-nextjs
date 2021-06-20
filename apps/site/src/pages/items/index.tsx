import React from 'react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next'

import { SearchResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import { API_URL } from '../../common/constants';
import {
  Breadcrumbs,
  ErrorWrapper
} from '../../common/components';
import {
  EmptyResults,
  ItemCard,
  styles
} from '../../modules/itemList';

type ItemListProps = {
  statusCode: number,
  data: SearchResult
};

export function ItemList({ statusCode, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps: GetServerSideProps<ItemListProps> = async (context) => {
  const res = await fetch(`${API_URL}/items?q=${context.query.search}`);
  const statusCode = res.ok ? 0 : res.status;
  const data: SearchResult = await res.json();

  return {
    props: {
      statusCode,
      data,
    },
  };
}

export default ItemList;