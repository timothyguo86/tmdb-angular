import { Movie } from './movie'

export type Tvshow = {
  id: number
  adult: boolean
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  name: string
  original_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
  episode_run_time: string
  type: string
}

export type TvshowsDto = {
  page: number
  results: Tvshow[]
  total_pages: number
  total_results: number
}

export function mapToMovie(tvshow: Tvshow): Movie {
  return {
    ...tvshow,
    title: tvshow.name,
    original_title: tvshow.original_name,
    release_date: tvshow.first_air_date,
  }
}

export function mapToMovies(tvshows: Tvshow[]): Movie[] {
  return tvshows.map((tvshow: Tvshow) => {
    return {
      ...tvshow,
      title: tvshow.name,
      original_title: tvshow.original_name,
    }
  })
}
