export interface IProject {
  id: number
  name: string
  slug: string
  description: string
  stack: Array<string>
  cover_image: string
}

interface ITrackItemAlbum {
  images: Array<{ url: string }>
}

interface ITrackItem {
  name: string
  external_urls: {
    spotify: string
  }
  album: ITrackItemAlbum
  artists: Array<{ name: string }>
}

export interface ITrack {
  is_playing: boolean
  item: ITrackItem 
}
