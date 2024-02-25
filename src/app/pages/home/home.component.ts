import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12)
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12)
  constructor(private moviesService: MoviesService) {}
}
