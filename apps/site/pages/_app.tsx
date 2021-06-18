import React from 'react';
import { AppProps } from 'next/app';
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';

import SearchInput from '../components/SearchInput/SearchInput';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <div className="app">
        <header className="toolbar">
          <div className="container">
            <div className="toolbar-wrapper">
              <div style={{ marginRight: 30, display: 'flex' }}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/Logo_ML.png"
                      height={36}
                      width={53}
                      alt="Mercadolibre"
                    />
                  </a>
                </Link>
              </div>
              <SearchInput />
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="main-wrapper">
              <Component {...pageProps} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
