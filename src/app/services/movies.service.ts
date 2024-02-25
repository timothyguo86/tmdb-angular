import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Movie, MoviesDto } from '../types/movie'
import { map } from 'rxjs'
import { VideoDto } from '../types/video'

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
      .get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results))
  }
}
