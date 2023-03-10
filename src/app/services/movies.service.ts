import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Movie, MovieDto } from '../movie.model';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = 'cb53e808c5e504b2a243e7fe5504b187';
    constructor(private http: HttpClient) {}
    getMovies(type: string) {
        const httpParams = new HttpParams();
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
            switchMap((response) => {
                return of(response.results);
            })
        );
    }

    searchMovies(page: number) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
            switchMap((response) => {
                return of(response.results);
            })
        );
    }
    getMovieDetail(id: string) {
        return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
    }
}
