import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SliderComponent } from './components/slider/slider.component'
import { HomeComponent } from './pages/home/home.component'
import { MovieListComponent } from './pages/movie-list/movie-list.component'
import { MoviesService } from './services/movies.service'
import { FooterComponent } from './shared/footer/footer.component'
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShowItemComponent } from './components/show-item/show-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieListComponent,
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
