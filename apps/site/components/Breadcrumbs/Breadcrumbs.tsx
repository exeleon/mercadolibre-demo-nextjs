import React from 'react';
import Link from 'next/link'

import styles from './Breadcrumbs.module.scss';

export function Breadcrumbs() {
  return (
    <div className={styles.breadcrumbs}>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default Breadcrumbs;
