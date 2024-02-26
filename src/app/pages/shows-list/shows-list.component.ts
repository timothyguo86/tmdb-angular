import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<Movie[]> | null = null

  searchValue = ''

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPagedShows(1)
  }

  getPagedShows(page: number, searchTerm?: string) {
    this.showsList$ = this.moviesService.searchMovies(page, searchTerm)
  }

  handleSearchChange() {
    this.getPagedShows(1, this.searchValue)
  }
}
