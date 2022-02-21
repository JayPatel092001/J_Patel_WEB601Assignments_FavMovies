import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './helper-files/movie-interface';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(MovieItem: Movie, dType?: string ): string {
    return MovieItem.imageUrl ?? dType ?? "https://tazacinema.com/wp-content/uploads/2020/04/Pushpa-Movie-First-Look-Poster-1.jpg";
  }

}
