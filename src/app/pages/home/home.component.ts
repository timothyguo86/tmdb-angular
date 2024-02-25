import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { TvshowsService } from '../../services/tvshows.service'
import { map } from 'rxjs'
import { mapToMovies } from '../../types/tvshow'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12)
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12)
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies))
  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}
}
