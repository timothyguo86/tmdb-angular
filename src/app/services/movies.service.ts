import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { CreditsDto } from '../types/creedits'
import { ImagesDto } from '../types/image'
import { Movie, MoviesDto } from '../types/movie'
import { VideosDto } from '../types/video'

@Injectable()
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = 'dadb019730c0075868955d1ec94040bb'
  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getSimilarMovies(id: string, count = 20) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    )
  }

  getMovieVideos(id: string) {
    return this.http
      .get<VideosDto>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  getMovieImages(id: string) {
    return this.http
      .get<ImagesDto>(
        `${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  getMovieCast(id: string) {
    return this.http
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  searchMovies(page: number, searchValue?: string) {
    const url = searchValue ? 'search/movie' : 'movie/popular'

    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/${url}?query=${searchValue}&page=${page}&include_adult=true&api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }
}
