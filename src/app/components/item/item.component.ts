import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie } from 'src/app/movie.model';
@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() itemData: Movie | null = null;

    imagesSizes = IMAGES_SIZES;

    constructor() {}

    ngOnInit(): void {}
}
