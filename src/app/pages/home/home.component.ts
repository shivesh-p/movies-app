import { Component } from '@angular/core';
import { Movie } from '../../movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    popularMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    constructor(private moviesService: MoviesService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.moviesService.getMovies('popular').subscribe((movies: Movie[]) => {
            this.popularMovies = movies;
        });
        this.moviesService.getMovies('top_rated').subscribe((movies: Movie[]) => {
            this.topRatedMovies = movies;
        });
        this.moviesService.getMovies('upcoming').subscribe((movies: Movie[]) => {
            this.upcomingMovies = movies;
        });
    }
}
