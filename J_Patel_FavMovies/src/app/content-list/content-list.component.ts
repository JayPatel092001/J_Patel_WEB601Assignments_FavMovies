import { Component, OnInit } from '@angular/core';
import { Movie } from '../helper-files/movie-interface';

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
  constructor(){
    this.MovieList = [{
      id:0,
      title:'Sultan',
      description:'This movie is done by my favrouite Actor Salman khan',
      creator:"salman khan",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Sultan_film_poster.jpg',
      tags:['bollywood', 'hindi']
      
    },{
      id:1,
      title:'DJ',
      description:'This south movie',
      creator:"Mahesh bhaat ",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/72/DJ_film_poster.jpg',
      type:'action',
      tags:['action','south', 'malyalm']
    },
    {
      id:2,
      title:'Bahubali',
      description:'One of the  most money making in bollywood ',
      creator:"Karan johar ",
      imageUrl: "",
      type:'action',
      tags:['action','south', 'all language']
    },
    {
      id:3,
      title:'Pushpa',
      description:' it stars Allu Arjun as the titular character alongside',
      creator:"SuKuKumar",
      imageUrl: 'https://tazacinema.com/wp-content/uploads/2020/04/Pushpa-Movie-First-Look-Poster-1.jpg',
      type:'action and real life',
      tags:['action and real','south', 'hindi']
    },
    {
      id:4,
      title:'Kgf',
      description:'Chapter 1 is a 2018 Indian Kannada-language period action film written and directed by Prashanth Neel',
      creator:"Prashanth Neel",
      imageUrl: 'https://th.bing.com/th/id/OIP.skmYKsVV0sr3JQ_YgPuN4QHaMC?pid=ImgDet&rs=1',
      type:'action and real-life',
      tags:['action and real','south and bollywood', 'hindi']
    },
    {
      id:5,
      title:'Kesri',
      description:'is a 2019 Indian Hindi-language war film written and directed by Anurag Singh',
      creator:"Anurag Singh",
      imageUrl: 'https://th.bing.com/th/id/OIP.XsXJ4emSgwrPKu8qtQJKqgHaE8?pid=ImgDet&rs=1',
      type:'action',
      tags:['action','bollywood', 'hindi']
    },
    {
      id:6,
      title:'Raabta',
      description:'Indian Hindi-language romantic action thriller film with a dose of comedy directed by Dinesh Vijan.',
      creator:"Dinesh Vijan.",
      imageUrl: 'https://images.indianexpress.com/2017/04/sushant-kriti-raabta-759.jpg',
      tags:['bollywood', 'all language']
    },
  ];
  

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
 

}
