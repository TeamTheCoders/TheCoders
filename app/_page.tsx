'use client'
import '../styles/globals.css';
// pages/_app.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Coders - Digital Excellence</title>
        <meta name="description" content="Transform your vision into reality with our cutting-edge web solutions. We craft stunning digital experiences that captivate, engage, and convert." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}