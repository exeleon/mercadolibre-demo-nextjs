import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Toolbar from '../common/components/Toolbar/Toolbar';
import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Demo Mercadolibre</title>
        <meta name="description" content="Demo de un e-commerce utilizando el API de Mercadolibre" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <Toolbar />

      <main>
        <div className="container">
          <div className="main-wrapper">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}

export default CustomApp;
