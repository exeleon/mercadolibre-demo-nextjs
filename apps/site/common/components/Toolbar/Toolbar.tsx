import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import SearchInput from './SearchInput/SearchInput';
import styles from './Toolbar.module.scss';

export function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <div className="container">
        <div className={`main-wrapper ${styles.wrapper}`}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/images/Logo_ML.png"
                height={36}
                width={53}
                alt="Mercadolibre"
              />
            </a>
          </Link>

          <SearchInput />
        </div>
      </div>
    </header>
  );
}

export default Toolbar;
