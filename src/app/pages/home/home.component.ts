import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming')
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated')
  constructor(private moviesService: MoviesService) {}
}
