import { Component, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator/paginator';
import { TvShows } from 'src/app/tvshows.model';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-shows',
    templateUrl: './shows.component.html',
    styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent {
    @ViewChild('paginator', { static: false }) paginator: Paginator;
    searchValue: string | null = null;
    shows: TvShows[] | null = null;
    constructor(private movieService: MoviesService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getTvShowsAccordingToPage(1);
    }

    paginateShows(event) {
        const pageNo = event.page + 1;

        if (this.searchValue) {
            this.getTvShowsAccordingToPage(pageNo, this.searchValue);
        } else {
            this.getTvShowsAccordingToPage(pageNo);
        }
    }
    getTvShowsAccordingToPage(page: number, searchValue?: string) {
        this.movieService.getTvShows(page, searchValue).subscribe((shows) => {
            this.shows = shows;
        });
    }
    searchTvShows() {
        if (this.searchValue) {
            this.getTvShowsAccordingToPage(1, this.searchValue);
            this.paginator.changePageToFirst(null);
        }
    }
}
