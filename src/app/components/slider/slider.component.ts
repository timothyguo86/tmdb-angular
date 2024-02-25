import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { imagesBaseUrl } from '../../constants/images-sizes'
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getMoviesByType('popular', 10)
  slideIndex = 0
  imagesBaseUrl = imagesBaseUrl

  ngOnInit() {
    this.changeSlide()
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1
      if (this.slideIndex > 10) {
        this.slideIndex = 0
      }
    }, 5000)
  }
}
