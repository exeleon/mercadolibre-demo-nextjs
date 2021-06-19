import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Toolbar } from '../common/components';
import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Demo Mercadolibre</title>
        <meta name="description" content="Demo de un e-commerce utilizando el API de Mercadolibre" />
        <meta property="og:site_name" content="Demo Mercadolibre" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFE600" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Demo Mercadolibre" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      <Toolbar />

      <main className="main">
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
