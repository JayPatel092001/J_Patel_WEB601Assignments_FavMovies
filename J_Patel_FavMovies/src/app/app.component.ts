import { Component } from '@angular/core';
import { Movie } from './helper-files/movie-interface';
import { MovieList } from './helper-files/movie-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'J_Patel_FavMovies';

  constructor() {
    
   

    let names: any;
   
    names = {
    id:1,
    title: "dj",
    description: "gsahdfgasd",
    creator:"mohan",
    imgURL: "jhedghdsgf",

    };
       

  }
}
