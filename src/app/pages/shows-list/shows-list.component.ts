import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { MoviesService } from '../../services/movies.service'
import { MoviesDto } from '../../types/movie'
import { PaginatorState } from 'primeng/paginator'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<MoviesDto> | null = null
  searchValue = ''
  first = 0

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPagedShows(1)
  }

  handleSearchChange() {
    this.first = 0
    this.getPagedShows(1, this.searchValue)
  }

  handlePageChange(event: PaginatorState) {
    this.first = event.first ? event.first : 0

    const pageNumber = event.page ? event.page + 1 : 1

    this.getPagedShows(pageNumber, this.searchValue)
  }

  getPagedShows(page: number, searchTerm?: string) {
    this.showsList$ = this.moviesService.searchMovies(page, searchTerm)
  }
}
