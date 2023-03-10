import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Movie, MovieImages } from 'src/app/movie.model';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { MoviesService } from '../../services/movies.service';
import { MovieCredits, MovieVideo } from './../../movie.model';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] | null = null;
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    readonly imageSizes = IMAGES_SIZES;

    constructor(private route: ActivatedRoute, private movieService: MoviesService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params.pipe(first()).subscribe((v) => {
            this.getMovieById(v['id']);
            this.getMovieVideos(v['id']);
            this.getMovieImages(v['id']);
            this.getMovieCredits(v['id']);
        });
    }

    getMovieById(id: string) {
        this.movieService.getMovieDetail(id).subscribe((movie) => {
            this.movie = movie;
        });
    }
    getMovieVideos(id: string) {
        this.movieService.getMovieDetailVideo(id).subscribe((movie) => {
            this.movieVideos = movie;
        });
    }
    getMovieImages(id: string) {
        this.movieService.getMovieImages(id).subscribe((movie) => {
            this.movieImages = movie;
        });
    }
    getMovieCredits(id: string) {
        this.movieService.getMovieCredits(id).subscribe((movie) => {
            this.movieCredits = movie;
        });
    }
}
