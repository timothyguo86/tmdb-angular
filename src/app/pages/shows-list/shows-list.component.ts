import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PaginatorState } from 'primeng/paginator'
import { Observable, map } from 'rxjs'

import { MoviesService } from '../../services/movies.service'
import { TvshowsService } from '../../services/tvshows.service'
import { MoviesDto } from '../../types/movie'
import { mapToMoviesDto } from '../../types/tvshow'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<MoviesDto> | null = null
  searchValue = ''
  first = 0
  showType: 'tv' | 'movie' = 'movie'

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showType = params['type']
      this.updateShowsList(1)
      console.log(this.showType)
    })
  }

  handleSearchChange() {
    this.first = 0
    this.updateShowsList(1)
  }

  handlePageChange(event: PaginatorState) {
    this.first = event.first ? event.first : 0
    const pageNumber = event.page ? event.page + 1 : 1
    this.updateShowsList(pageNumber)
  }
  updateShowsList(page: number) {
    const searchTerm = this.searchValue.trim()
    if (this.showType === 'movie') {
      this.showsList$ = this.moviesService.searchMovies(page, searchTerm)
    } else if (this.showType === 'tv') {
      this.showsList$ = this.tvshowsService
        .searchTvshows(page, searchTerm)
        .pipe(map(mapToMoviesDto))
    }
  }
}
