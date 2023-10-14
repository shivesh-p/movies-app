import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { TvShows } from '../../tvshows.model';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('slideFade', [
            state('void', style({ opacity: 0 })),
            transition('void => *', [animate('1.5s ease-in')]),
            transition('* => void', [animate('1.5s ease-out')]),
        ]),
    ],
})
export class SliderComponent {
    //this component deals with the slider used for showing the movies
    @Input() moviesList?: Movie[];
    @Input() tvShowList?: TvShows[];
    @Input() isBanner: boolean = false;
    @Input() isTvShowBanner: boolean = false;
    currentSlideIndex = 0;
    readonly imageSize = IMAGES_SIZES;
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if (!this.isBanner) {
            setInterval(() => {
                this.currentSlideIndex = ++this.currentSlideIndex % this.moviesList.length;
            }, 7000);
        }
    }
}
