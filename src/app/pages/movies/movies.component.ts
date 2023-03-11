import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
    totalCount: number | null = null;
    movies: Movie[] | null = null;
    genreId: number | null = null;
    constructor(private movieService: MoviesService, private route: ActivatedRoute) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
            if (genreId) {
                this.genreId = genreId;
                this.getMoviesByGenre(genreId, 1);
            } else {
                this.getMoviesAccordingToPage(1);
            }
        });
    }
    getMoviesAccordingToPage(page: number) {
        this.movieService.searchMovies(page).subscribe((movies) => {
            this.movies = movies;
            //this.totalCount = movies.length;
        });
    }
    getMoviesByGenre(genreId: number, page: number) {
        this.movieService.getMoviesByGenre(genreId, page).subscribe((movies) => {
            this.movies = movies;
            //this.totalCount = movies.length;
        });
    }

    paginate(event) {
        const pageNo = event.page + 1;
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        if (this.genreId) {
            this.getMoviesByGenre(this.genreId, pageNo);
        } else {
            this.getMoviesAccordingToPage(pageNo);
        }
    }
}
