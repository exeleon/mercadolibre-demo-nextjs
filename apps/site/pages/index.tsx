import React from 'react';

import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.welcome}>
      <div>
        <h1>Bienvenido!</h1>
        <p>Utiliza el buscador para encontrar algún artículo.</p>
      </div>
    </div>
  );
}

export default Index;
