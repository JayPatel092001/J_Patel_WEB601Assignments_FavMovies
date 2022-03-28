import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MovieList } from "../helper-files/contentDb";
import { Movie } from "../helper-files/movie-interface";
import { MessageService } from "./message.service";

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn:'root'
})
export class MovieService
{
    
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
      };
      
    constructor(private http: HttpClient, private msgService: MessageService) { }

    
    getContent(): Observable<Movie[]> { // get the content synchronously - not real world
        this.msgService.add('Movie List');
        return this.http.get<Movie[]>("api/movie");
        
      }

      addContent(newContentItem: Movie): Observable<Movie>{
        this.msgService.add('Item Added');
        return this.http.post<Movie>("api/movie", newContentItem, this.httpOptions);
      }
    
      updateContent(contentItem: Movie): Observable<any>{
        this.msgService.add('Item Updated completly.') ;
        return this.http.put("api/movie", contentItem, this.httpOptions);
      }

    getSingleItem(id: number): Movie
    {
        this.http.get('Single Item Added Successfully!...' + id);
        return MovieList[id];
    }
}