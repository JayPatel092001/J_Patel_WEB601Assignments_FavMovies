import { Component } from '@angular/core';
import { Movie } from './helper-files/movie-interface';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public messageSer: MessageService)
  {
    
  }
   
}