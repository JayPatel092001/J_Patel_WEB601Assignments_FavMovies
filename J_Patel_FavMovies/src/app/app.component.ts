import { Component } from '@angular/core';
import { Movie } from './helper-files/movie-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Movie List';
  MovieList: Movie[];
  constructor(){
    this.MovieList = [{
      id:0,
      title:'Sultan',
      description:'This movie is done by my favrouite Actor Salman khan',
      creator:"salman khan",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Sultan_film_poster.jpg',
      type:'action'
    },{
      id:1,
      title:'DJ',
      description:'This south movie',
      creator:"Mahesh bhaat ",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/72/DJ_film_poster.jpg',
      type:'action'
    },
    {
      id:2,
      title:'Bahubali',
      description:'One of the  most money making in bollywood ',
      creator:"Karan johar ",
      imageUrl: 'https://th.bing.com/th/id/OIP.HVCD7hS43lFZ-gZ2LdVJSQHaKt?pid=ImgDet&rs=1',
      type:'action'
    },
    {
      id:3,
      title:'Pushpa',
      description:' it stars Allu Arjun as the titular character alongside',
      creator:"SuKuKumar",
      imageUrl: 'https://tazacinema.com/wp-content/uploads/2020/04/Pushpa-Movie-First-Look-Poster-1.jpg',
      type:'acttion and real life'
    },
    {
      id:4,
      title:'Kgf',
      description:'Chapter 1 is a 2018 Indian Kannada-language period action film written and directed by Prashanth Neel',
      creator:"Prashanth Neel",
      imageUrl: 'https://th.bing.com/th/id/OIP.skmYKsVV0sr3JQ_YgPuN4QHaMC?pid=ImgDet&rs=1',
      type:'action and romatic'
    },
    {
      id:5,
      title:'Kesri',
      description:'is a 2019 Indian Hindi-language war film written and directed by Anurag Singh',
      creator:"Anurag Singh",
      imageUrl: 'https://th.bing.com/th/id/OIP.XsXJ4emSgwrPKu8qtQJKqgHaE8?pid=ImgDet&rs=1',
      type:'Real-life Movie'
    },
  ];
  

  }
  
  
}