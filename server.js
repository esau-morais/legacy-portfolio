import * as build from '@remix-run/dev/server-build'
import { createRequestHandler } from '@remix-run/vercel'

import {
  createMetronomeGetLoadContext,
  registerMetronome,
} from '@metronome-sh/vercel'

const buildWithMetronome = registerMetronome(build)

const metronomeGetLoadContext = createMetronomeGetLoadContext(
  buildWithMetronome,
  { config: require('./metronome.config.js') }
)

export default createRequestHandler({
  build: buildWithMetronome,
  getLoadContext: metronomeGetLoadContext,
  mode: process.env.NODE_ENV
})
