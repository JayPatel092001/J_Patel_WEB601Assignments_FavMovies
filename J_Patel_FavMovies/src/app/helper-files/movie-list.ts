import {Movie} from "./movie-interface";

export class MovieList{
  private _items: Movie[];

  constructor(){
    this._items = [];
  }
  get items(): Movie[] {
    return this._items;
  }
  addItem(oneContentItem: Movie): void{
    this._items.push(oneContentItem);
  }
  numberOfItems(): number{
    return this._items.length;
  }

  getHtml(index: number): string{
    if (index >= this._items.length || index < 0)
    {
      return "<div>Something went terribly wrong</div>"
    }
    let itemAtIndex = this._items[index]
    return `<div class="title">${itemAtIndex.title}</div>
            <div class="description">${itemAtIndex.description}</div>
            <div class="creator">${itemAtIndex.creator}</div>
            <div class="image"><img src="${itemAtIndex.imageUrl}" width="200"></div>
            <div class="type">${itemAtIndex.type}</div>`;
  }
}