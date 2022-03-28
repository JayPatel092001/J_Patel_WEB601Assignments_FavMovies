import { Component, OnInit } from '@angular/core';
import { Movie } from '../helper-files/movie-interface';
import { MovieService } from '../services/movie.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  pract= false;
  avMovie="";
  avNotMovie="";
  title = "Movie List";
  MovieList: Movie[];
  singleMoive: Movie | undefined;

  constructor(private movieService: MovieService){
    this.MovieList = [];
    this.singleMoive ;
    let ourPromise = new Promise((success, fail) => {
      let testPass = false;
      if (testPass) {
        success("Success was achieved!");
      }
      else {
        fail("Failure :(");
      }
    });

    console.log("First console log");

  ourPromise
    .then(function (successMessage) {
      console.log("The promise succeeded and came back with the following message: ", successMessage);
    })
    .catch(function (failureMessage) {
      console.log("The promise failed and came back with the following message: ", failureMessage);
    });

  console.log("Fourth console log");

  let getStuff = async function () {
    return "stuff";
  }
  // function async getStuffUsingOldFunctionDefinition(): string{
  //   return "stuff";
  // }
  let getTheSameStuff = async function () {
    return "Similar stuff";
  }

  //different way to represent functions
  let getAllTheStuff = async () => {
    const theFirstStuff = getStuff();
    const theSecondStuff = getTheSameStuff();
    //returns both promises
    return await Promise.all([theFirstStuff, theSecondStuff]);
  }
  getAllTheStuff().then((value) => {
    console.log("First value from the getAllTheStuff method: ", value[0]);
    console.log("Second value from the getAllTheStuff method: ", value[1]);
  });

  }

  ngOnInit(): void {
    
    // this.MovieList = this.movieService.getContent();
    // this.singleMoive = this.movieService.getSingleItem(0);
    // console.log(this.singleMoive);

    this.getMovieListFromServer();  
    
  }

  getMovieListFromServer(): void{
    this.movieService.getContent().subscribe(movieArray => this.MovieList = movieArray);
  }


  listofmovie(cardNameOnTheTypescriptSide: string): void {
    
   
    this.MovieList.forEach(t => {
      if (t.title == cardNameOnTheTypescriptSide ){
        this.pract = true;
      }
    });
    if(this.pract){
      cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" is available in list.";
      this.avMovie = cardNameOnTheTypescriptSide;
      this.avNotMovie = "";

    }else{
      cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" is not available in list.";
      this.avNotMovie = cardNameOnTheTypescriptSide;
      this.avMovie = "";
    }
    this.pract = false;
    
  }



  addMovieToList(newMovie : Movie) : void
  {
    this.movieService
      .addContent(newMovie)
      .subscribe((newContentFromServer) => {
        console.log('New content from server: ', newContentFromServer);

        this.MovieList.push(newContentFromServer);
        this.MovieList = [...this.MovieList]; // using the spread operator
      });
  } 
    updateContent(contentItem: Movie): void {
      this.movieService.updateContent(contentItem).subscribe(() => {
        console.log('Content updated');
        this.getMovieListFromServer();
      });
  }


}
