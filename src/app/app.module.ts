import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DisplayMovieComponent } from './display-movie.component';
import { SearchComponent } from './search/search.component';
import { MoviePreviewComponent } from './search/movie-preview.component';
import { FooterComponent } from './footer.component'
@NgModule({
  declarations: [
    HeaderComponent, 
    AppComponent, DisplayMovieComponent, SearchComponent, MoviePreviewComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
