import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { SearchResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './items.module.scss';

export function Items({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <React.Fragment>
      <Breadcrumbs categories={data.categories} />

      {data.items.length
        ? (<div className={styles.list}>
            {data.items.map(item => (<ItemCard key={item.id} item={item} />))}
          </div>)
        : (<div className={styles.no_results}>
            <div>
              <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
              <ul>
                <li><strong>Revisa la ortografía</strong> de la palabra.</li>
                <li>Utiliza <strong>palabras más genéricas</strong> o menos palabras.</li>
              </ul>
            </div>
          </div>)
      }
    </React.Fragment>
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