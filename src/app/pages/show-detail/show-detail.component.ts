import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { Movie } from '../../types/movie'
import { IMAGES_SIZES } from '../../constants/images-sizes'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = ''
  show$: Observable<Movie> | null = null
  imagesSizes = IMAGES_SIZES

  constructor(
    private router: ActivatedRoute,
    private MoviesService: MoviesService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id']
    })

    this.show$ = this.MoviesService.getMovieById(this.showId)
  }
}
