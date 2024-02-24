import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=dadb019730c0075868955d1ec94040bb'
      )
      .subscribe((data) => {
        console.log(data)
      })
  }
}
