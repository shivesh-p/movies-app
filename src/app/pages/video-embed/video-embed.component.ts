import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-embed',
    templateUrl: './video-embed.component.html',
    styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent {
    @Input() site: string = 'YouTube';
    @Input() key: string | null = null;
    videoUrl: SafeResourceUrl = '';
    constructor(private sanitizer: DomSanitizer) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
    }
    getSafeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
