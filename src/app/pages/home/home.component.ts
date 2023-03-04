import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    movies: any = [];
    constructor(private moviesService: MoviesService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.moviesService.getPopularMovies().subscribe((movies: any) => {
            this.movies = movies.results;
        });
    }
}
