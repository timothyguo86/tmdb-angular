import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss',
})
export class VideoEmbedComponent implements OnInit {
  @Input() key: string | null = null

  videoUrl: SafeResourceUrl = ''

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.key
    )
  }
}
