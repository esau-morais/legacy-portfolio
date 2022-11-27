import type { ITrack } from "@/lib/data"

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = btoa(`${client_id}:${client_secret}`)
const CURRENT_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

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
    } as any)
  })

  return response.json()
}

const fetchCurrentPlaying = async () => {
  const { access_token } = await getAccessToken()

  const track = await fetch(CURRENT_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Cache-Control': 'max-age=1, stale-while-revalidate=59'
    }
  })

  return await track.json()
}

export { fetchCurrentPlaying }
