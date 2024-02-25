import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../types/movie'

@Injectable()
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = 'dadb019730c0075868955d1ec94040bb'
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    )
  }

  getUpcomingMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`
    )
  }

  getTopRatedMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`
    )
  }
}
