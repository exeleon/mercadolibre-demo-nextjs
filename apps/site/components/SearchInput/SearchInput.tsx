import React from 'react';
import Link from 'next/link'

import styles from './SearchInput.module.scss';

export function SearchInput() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nunca dejes de buscar" />

      <button type="submit">
        <img src="/images/ic_Search.png" />
      </button>
    </form>
  );
}

export default SearchInput;
