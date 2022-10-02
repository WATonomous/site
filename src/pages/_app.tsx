import React from 'react'
import Head from 'next/head'
import { Nav } from '../components'
import '../styles/base.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          WATonomous | University of Waterloo Autonomous Vehicle Design Team
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
