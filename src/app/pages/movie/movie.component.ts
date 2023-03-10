import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie.model';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
    movie: Movie | null = null;
    readonly imageSizes = IMAGES_SIZES;
    constructor(private route: ActivatedRoute, private movieService: MoviesService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params.subscribe((v) => {
            this.getMovieById(v['id']);
        });
    }

    getMovieById(id: string) {
        this.movieService.getMovieDetail(id).subscribe((movie) => {
            this.movie = movie;
        });
    }
}
