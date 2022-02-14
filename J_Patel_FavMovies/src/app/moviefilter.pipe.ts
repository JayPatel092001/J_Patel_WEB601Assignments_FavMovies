import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './helper-files/movie-interface';

@Pipe({
  name: 'moviefilter'
})
export class MoviefilterPipe implements PipeTransform {

  transform(MovieList: Movie[], moviepara ?: string): Movie[] 
  {
    
    if(moviepara==null)
    {
      return MovieList.filter(m=>m.type==null);
    }
    return MovieList.filter(m=>m.type==moviepara);
    
  }

}
