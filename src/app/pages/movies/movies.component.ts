import { Component } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
    movies: Movie[] | null = null;
    constructor(private movieService: MoviesService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getMoviesAccordingToPage(1);
    }
    getMoviesAccordingToPage(page: number) {
        this.movieService.searchMovies(page).subscribe((movies) => {
            this.movies = movies;
        });
    }
    paginate(event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        this.getMoviesAccordingToPage(event.page + 1);
    }
}
