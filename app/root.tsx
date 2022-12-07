import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import Layout from './components/templates/Layout'
import styles from './styles/tailwind.css'
import { description } from './utils/constants'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Esaú Morais',
  description,
  viewport: 'width=device-width,initial-scale=1',
  'color-scheme': 'dark',
  'og:type': 'website',
  'og:url': 'https://emots.dev',
  'og:title': 'Esaú Morais',
  'og:description': description,
  // TODO: create OG image
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
]

const App = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
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
