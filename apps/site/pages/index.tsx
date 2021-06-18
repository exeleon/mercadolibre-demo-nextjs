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
    <div className="bg-white rounded p-sm mt-lg">
      <h1>Bienvenido al Demo!</h1>
      <p>Utiliza el buscador para encontrar algún artículo.</p>
    </div>
  );
}

export default Index;
