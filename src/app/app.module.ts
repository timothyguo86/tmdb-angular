import { NgModule } from '@angular/core'
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
