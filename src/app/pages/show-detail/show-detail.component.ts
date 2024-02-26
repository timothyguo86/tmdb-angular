import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { Movie } from '../../types/movie'
import { IMAGES_SIZES } from '../../constants/images-sizes'
import { Video } from '../../types/video'
import { Image } from '../../types/image'
import { Actor } from '../../types/creedits'
import { TvshowsService } from '../../services/tvshows.service'
import { mapToMovie, mapToMovies } from '../../types/tvshow'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = ''
  showType: 'tv' | 'movie' = 'movie'

  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null
  showImages$: Observable<Image[]> | null = null
  showCasts$: Observable<Actor[]> | null = null
  similarMovies$: Observable<Movie[]> | null = null
  imagesSizes = IMAGES_SIZES

  constructor(
    private router: ActivatedRoute,
    private MoviesService: MoviesService,
    private tvService: TvshowsService
  ) {}

  ngOnInit() {
    // this.showId = this.router.snapshot.params['id']
    this.router.params.subscribe((params) => {
      this.showId = params['id']
      this.showType = params['type']
    })
    if (this.showType === 'movie') {
      this.show$ = this.MoviesService.getMovieById(this.showId)
      this.showVideos$ = this.MoviesService.getMovieVideos(this.showId)
      this.showImages$ = this.MoviesService.getMovieImages(this.showId)
      this.showCasts$ = this.MoviesService.getMovieCast(this.showId)
      this.similarMovies$ = this.MoviesService.getSimilarMovies(this.showId, 12)
    }

    if (this.showType === 'tv') {
      this.show$ = this.tvService
        .getTvshowById(this.showId)
        .pipe(map(mapToMovie))
      this.showVideos$ = this.tvService.getTvshowVideos(this.showId)
      this.showImages$ = this.tvService.getTvshowImages(this.showId)
      this.showCasts$ = this.tvService.getTvshowCast(this.showId)
      this.similarMovies$ = this.tvService
        .getSimilarTvshows(this.showId, 12)
        .pipe(map(mapToMovies))
    }
  }
}
