import React from 'react';
import Link from 'next/link'

import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Link href="/items?search=celular">
        <a>Search results</a>
      </Link>
      <Link href="/items/MLA883778460">
        <a>Item X</a>
      </Link>
    </div>
  );
}

export default Index;
