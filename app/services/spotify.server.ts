import { json } from '@remix-run/node'

import type { ITrack } from '@/lib/data'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = String(process.env.SPOTIFY_REFRESH_TOKEN)

const basic = btoa(`${client_id}:${client_secret}`)
const CURRENT_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json() as Promise<{ access_token: string }>
}

export const fetchCurrentPlaying = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(CURRENT_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Cache-Control': 'private, max-age=10',
    }
  })

  if (response.status === 204 || response.status > 400) return json({ isPlaying: false })

  const track = await response.json() as ITrack

  if (!track.item) return json({ isPlaying: false })

  return json({
    isPlaying: track.is_playing,
    title: track.item.name,
    albumImageURL: track.item.album.images[1].url,
    artistName: track.item.artists[0].name
  })
}
