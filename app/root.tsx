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
  'og:image': 'https://raw.githubusercontent.com/esau-morais/portfolio/dev/public/images/og_image.png'
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
