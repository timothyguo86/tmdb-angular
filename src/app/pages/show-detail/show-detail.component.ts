import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = 0

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id']
    })
  }
}
