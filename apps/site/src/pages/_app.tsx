import React from 'react';
import { AppProps } from 'next/app';

import {
  SEOHead,
  Toolbar
} from '../common/components';
import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOHead metaTags={pageProps.metaTags} />

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
