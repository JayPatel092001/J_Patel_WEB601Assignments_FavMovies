import{Movie} from 'src/app/helper-files/movie-interface';

export class MovieList {
    static MovieCount = 0;
    private _items: Movie[];
  
    constructor(item: Movie) {
      this._items = []; // initialize array
      this._items[0] = item;
      this.increaseCount();
    }
  
    get items(): Movie[] {
      return this._items;
    }
    set items(newItems: Movie[]) {
      this._items = newItems;
    }
  
    increaseCount() {
      return ++MovieList.MovieCount;
    }
  }