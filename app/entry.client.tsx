import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { RemixBrowser } from '@remix-run/react'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}

reportWebVitals(sendToVercelAnalytics)
