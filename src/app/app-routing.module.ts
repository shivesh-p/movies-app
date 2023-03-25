import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowdetailComponent } from './pages/showdetail/showdetail.component';
import { ShowsComponent } from './pages/shows/shows.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/genres/:genreId', component: MoviesComponent },
    { path: 'genres', component: GenresComponent },
    { path: 'tvshows', component: ShowsComponent },
    { path: 'tvshows/:id', component: ShowdetailComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
