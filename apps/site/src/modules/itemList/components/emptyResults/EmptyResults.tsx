import React from 'react';

import styles from './EmptyResults.module.scss';

export function EmptyResults() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul>
          <li><strong>Revisa la ortografía</strong> de la palabra.</li>
          <li>Utiliza <strong>palabras más genéricas</strong> o menos palabras.</li>
        </ul>
      </div>
    </div>
  );
}

export default EmptyResults;
