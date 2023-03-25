import { Component, Input } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TvShows } from '../../tvshows.model';

@Component({
    selector: 'shows-item',
    templateUrl: './showsitem.component.html',
    styleUrls: ['./showsitem.component.scss'],
})
export class ShowsitemComponent {
    @Input() itemData: TvShows | null = null;

    imagesSizes = IMAGES_SIZES;

    constructor() {}

    ngOnInit(): void {}
}
