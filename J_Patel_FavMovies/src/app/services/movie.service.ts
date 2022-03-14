import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MovieList } from "../helper-files/contentDb";
import { Movie } from "../helper-files/movie-interface";
import { MessageService } from "./message.service";

@Injectable({
    providedIn:'root'
})
export class MovieService
{
    
    
    constructor(private messageSer: MessageService) { }

    getContent(): Movie[]{
        return MovieList;
    }

    getSingleItem(id: number): Movie
    {
        this.messageSer.add('Single Item Added Successfully!...' + id);
        return MovieList[id];
    }
}