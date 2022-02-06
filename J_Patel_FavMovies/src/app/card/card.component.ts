import { Component, OnInit } from '@angular/core';
import {MovieList} from "../helper-files/movie-list";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  myList: MovieList;
  constructor() { 

    this.myList = new MovieList();
    console.log("my list contains these items: ", this.myList.items);

    this.myList.addItem({
      id: 0,
      title: "Sultan",
      description: "Greate action and real-life Movie",
      creator: "Mahesh bhaat",
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fentertainment%2Fhindi%2Fbollywood%2Fnews%2Fsultan-completes-4-years-ali-abbas-zafar-thanks-the-entire-team-as-he-shares-a-poster-featuring-salman-khan-anushka-sharma%2Farticleshow%2F76814942.cms&psig=AOvVaw1OtEO3M1sVZu6fJwdMjHCQ&ust=1644274983793000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD5vOWX7PUCFQAAAAAdAAAAABAI",
      type:"action"
    });
    this.myList.addItem({
      id: 1,
      title: "DJ",
      description: "Only action and regoinal Movie",
      creator: "Dhruva Nadan",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/DJ_film_poster.jpg",
      type: "Full of action Movie"
    });
    this.myList.addItem({
      id: 2,
      title: "ae dil mushkil",
      description: "One of Best romatic movie of bollywood",
      creator: "Karan Johar",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ec/Ae_Dil_Hai_Mushkil.jpg",
      type: "Romatic"
    });

    console.log("my list contains these items: ", this.myList.items);


    console.log("The length of the array is:  ", this.myList.numberOfItems());

    console.log("THe html output is: ", this.myList.getHtml(0));

  }

  ngOnInit(): void {
  }

}
