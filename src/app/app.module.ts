import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { ItemComponent } from './components/item/item.component';
import { SliderComponent } from './components/slider/slider.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { VideoEmbedComponent } from './pages/video-embed/video-embed.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MoviesComponent,
        SliderComponent,
        ItemBannerComponent,
        ItemComponent,
        MovieComponent,
        VideoEmbedComponent,
        GenresComponent,
    ],
    imports: [
        BrowserModule,
        TabViewModule,
        PaginatorModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ImageModule,
        CarouselModule,
        InputTextModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
