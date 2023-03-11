import { Component } from '@angular/core';
import { Genre } from 'src/app/movie.model';
import { MoviesService } from './../../services/movies.service';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
    movieGenres: Genre[];

    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.movieService.getMovieGenres().subscribe((genres) => {
            this.movieGenres = genres;
        });
    }
}
