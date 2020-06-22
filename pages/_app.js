import React from 'react'
import dynamic from 'next/dynamic'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'

import MDXProvider from '../components/MDXProvider'

import './reset.css'
import './fonts.css'
import './styles.scss'

export default ({ Component, pageProps }) => { 
  const MDXMenu = dynamic(() => import(`../site/menu.mdx`))

  return (
    <CacheProvider value={cache}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </CacheProvider>
  )
}
