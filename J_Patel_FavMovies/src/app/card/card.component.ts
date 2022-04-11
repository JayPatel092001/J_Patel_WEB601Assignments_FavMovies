import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../helper-files/movie-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() MovieItem?: Movie



  constructor() {
    
    
   }

  ngOnInit(): void {

  }
  imageClicked(): void {
    console.log("ID: ", this.MovieItem?.id, ", Title: ", this.MovieItem?.title);
  }

}