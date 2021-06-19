import React from 'react';

import styles from './Breadcrumbs.module.scss';

export function Breadcrumbs({ categories }: { categories: string[] }) {
  return (
    <div className={styles.wrapper}>
      {categories.map((category, i) => (
        <a key={i}>{category}</a>
      ))}
    </div>
  );
}

export default Breadcrumbs;
