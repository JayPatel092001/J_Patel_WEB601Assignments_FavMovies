import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../helper-files/movie-interface';
import { MovieService} from '../services/movie.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  MovieItem?: Movie;
  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.movieService.getContentItem(this.id).subscribe(
        (c) => {
          this.MovieItem = c;
        });
    });
  }
}
