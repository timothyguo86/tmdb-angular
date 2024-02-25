import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Movie, MoviesDto } from '../types/movie'
import { map } from 'rxjs'
import { VideosDto } from '../types/video'
import { ImagesDto } from '../types/image'

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
}
