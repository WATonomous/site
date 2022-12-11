import '../styles/base.scss'

import { Footer, Nav } from '../components'

import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { arrowify } from '../util'
import { theme } from '../theme'

// createGlobalStyle?

// Generate CSS variables from theme
const variables = `
  :root {
    ${Object.entries(theme.colors)
      .map(([k, v]) => `--${arrowify(k)}: ${v}`)
      .join(';')}
  }
`

// TODO _document: inject global themes (e.g. resets) at document level to avoid FOUC
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          WATonomous | University of Waterloo Autonomous Vehicle Design Team
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{variables}</style>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
