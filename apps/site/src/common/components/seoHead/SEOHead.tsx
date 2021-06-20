import Head from 'next/head';
import React from 'react';
import { APP_NAME } from '../../constants';
import { MetaTags } from '../../interfaces';

export function SEOHead({ metaTags }: { metaTags: MetaTags }) {

  const title = metaTags?.title ?? '';
  const description = metaTags?.description ?? '';
  const url = metaTags?.url ?? '';

  return (
    <Head>
      <title>{title + (title ? ' | ' : '') + APP_NAME}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title || APP_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url || '/'} />

      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>

      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#FFE600" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Head>
  );
}

export default SEOHead;
