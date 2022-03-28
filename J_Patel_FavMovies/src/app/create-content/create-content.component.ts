import { Component,EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import {Movie} from '../helper-files/movie-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();
  newMovie?: Movie;

  @ViewChild('title')
  inputTitle!: { nativeElement: { value: string; }; };

  @ViewChild('id')
  inputId!: { nativeElement: { value: string; }; };
  
  @ViewChild('description')
  inputDesc!: { nativeElement: { value: string; }; };
  
  @ViewChild('price')
  inputPrice!: { nativeElement: { value: string; }; };
  
  @ViewChild('type')
  inputType!: { nativeElement: { value: string; }; };
  
  @ViewChild('tags')
  inputTag!: { nativeElement: { value: string; }; };

  @ViewChild('imageUrl')
  inputImg!: { nativeElement: { value: string; }; };
  
  
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
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
  }

}
