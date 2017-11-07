import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { Movie } from './Movie'

@Injectable()
export class MovieService {
  private selectedMovie$:Subject<Movie> = new Subject<Movie>()
  private apiKey:string = "02f89b2584b78aa77171c14740eba5a9"
  
  constructor() { }

  get currentMovie(){
    return this.selectedMovie$
  }

  changeSelectedMovie(movie:Movie){
    this.selectedMovie$.next(movie)
  }
}
