import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { retry } from 'rxjs';
import { MovieList } from '../../app/helper-files/contentDb';
import { Movie } from '../../app/helper-files/movie-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb()
  {
    const movie : Movie[] = MovieList;
    return{movie};
  }

  genId(content : Movie[]) : number
  {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }

}
