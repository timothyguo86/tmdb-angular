import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../types/movie'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=dadb019730c0075868955d1ec94040bb'
    )
  }
}
