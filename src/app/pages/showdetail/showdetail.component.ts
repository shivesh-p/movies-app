import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MovieCredits, MovieImages, MovieVideo } from 'src/app/movie.model';
import { MoviesService } from '../../services/movies.service';
import { TvShows } from '../../tvshows.model';

@Component({
    selector: 'show-detail',
    templateUrl: './showdetail.component.html',
    styleUrls: ['./showdetail.component.scss'],
})
export class ShowdetailComponent {
    show: TvShows | null = null;
    movieVideos: MovieVideo[] | null = null;
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    readonly imageSizes = IMAGES_SIZES;
    constructor(private movieService: MoviesService, private route: ActivatedRoute) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params.subscribe((v) => {
            this.getTvShowById(v['id']);
            this.getMovieVideos(v['id']);
            this.getMovieImages(v['id']);
            this.getMovieCredits(v['id']);
        });
    }
    getTvShowById(id: string) {
        this.movieService.getTvShowDetail(id).subscribe((show) => {
            this.show = show;
        });
    }
    getMovieVideos(id: string) {
        this.movieService.getTvShowVideo(id).subscribe((movie) => {
            this.movieVideos = movie;
        });
    }
    getMovieImages(id: string) {
        this.movieService.getTvShowImages(id).subscribe((movie) => {
            this.movieImages = movie;
        });
    }
    getMovieCredits(id: string) {
        this.movieService.getTvShowCredits(id).subscribe((movie) => {
            this.movieCredits = movie;
        });
    }
}
