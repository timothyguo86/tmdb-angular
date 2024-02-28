import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CarouselModule } from 'primeng/carousel'
import { DividerModule } from 'primeng/divider'
import { ImageModule } from 'primeng/image'
import { InputTextModule } from 'primeng/inputtext'
import { PaginatorModule } from 'primeng/paginator'
import { TabViewModule } from 'primeng/tabview'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BannerComponent } from './components/banner/banner.component'
import { ShowItemComponent } from './components/show-item/show-item.component'
import { SliderComponent } from './components/slider/slider.component'
import { VideoEmbedComponent } from './components/video-embed/video-embed.component'

import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowsListComponent } from './pages/shows-list/shows-list.component'

import { MoviesService } from './services/movies.service'
import { TvshowsService } from './services/tvshows.service'

import { FooterComponent } from './shared/footer/footer.component'
import { HeaderComponent } from './shared/header/header.component';
import { GenresComponent } from './pages/genres/genres.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    ShowsListComponent,
    VideoEmbedComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    DividerModule,
  ],
  providers: [MoviesService, TvshowsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
