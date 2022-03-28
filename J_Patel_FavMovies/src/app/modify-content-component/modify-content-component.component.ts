import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Movie} from '../helper-files/movie-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() updateMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();
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
  updateMovie(id:string, title:string,imageUrl:string,description:string,creator:string,type:string,tags:string): void{
    this.newMovie = {
      id:parseInt(id),
      title:title,
      imageUrl: imageUrl,
      description: description,
      creator: creator,
      type : type,
      tags : tags.split(",")
    };
    this.updateMovieEvent.emit(this.newMovie);
  }
}
