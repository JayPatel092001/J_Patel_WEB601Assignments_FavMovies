import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../helper-files/movie-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
@Output() newMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();
newMovie?: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  addMovie(id: string, title: string,description:string, creator: string, imageUrl: string, type: string, tags: string) : void
  {
    this.newMovie=
    {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imageUrl: imageUrl,
      type:type,
      tags: tags.split(",")
    };
    this.newMovieEvent.emit(this.newMovie);
  }
}
