import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { MoviesService } from '../../services/movies.service'
import { Genre, MoviesDto } from '../../types/movie'
import { PaginatorState } from 'primeng/paginator'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null
  shows$: Observable<MoviesDto> | null = null
  first = 0
  genreId = ''

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.genres$ = this.moviesService.getMovieGenres()
  }

  findByGenre(genreId: string) {
    this.shows$ = this.moviesService.getMoviesByGenre(genreId)
    this.genreId = genreId
    this.first = 0
  }

  handlePageChange(event: PaginatorState) {
    this.first = event.first ? event.first : 0

    const pageNumber = event.page ? event.page + 1 : 1
    this.updateShows(pageNumber)
  }

  updateShows(page: number) {
    this.shows$ = this.moviesService.getMoviesByGenre(this.genreId, page)
  }
}
