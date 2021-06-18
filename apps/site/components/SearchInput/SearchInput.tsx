import React, { useRef } from 'react';
import { useRouter } from 'next/router';

import styles from './SearchInput.module.scss';

export function SearchInput() {
  const router = useRouter();
  const textInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const keywords = textInput.current.value;
    router.push(`/items?search=${keywords}`);
  }

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <input
        ref={textInput}
        placeholder="Nunca dejes de buscar" />

      <button type="submit">
        <img src="/images/ic_search.png" />
      </button>
    </form>
  );
}

export default SearchInput;
