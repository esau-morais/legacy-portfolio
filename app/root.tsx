import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import { MetronomeLinks } from '@metronome-sh/react'

import Layout from './components/templates/Layout'
import styles from './styles/tailwind.css'
import { description, ogImage, title, url } from './utils/constants'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Esaú Morais',
  description,
  viewport: 'width=device-width,initial-scale=1',
  'color-scheme': 'dark',
  'og:type': 'website',
  'og:url': url,
  'og:title': title,
  'og:description': description,
  'og:image': ogImage,
  'og:image:width': '1600',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:url': url,
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': ogImage
})

export const links: LinksFunction = () => [
  { rel: 'preload', href: styles, as: 'style' },
  { rel: 'stylesheet', href: styles },
]

const App = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <MetronomeLinks />
      </head>
      <body className="font-telegraf text-light">
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  )
}

export default App
