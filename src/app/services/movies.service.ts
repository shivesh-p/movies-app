import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Movie, MovieCredits, MovieDto, MovieVideoDto } from '../movie.model';
import { Genres, MovieImages } from './../movie.model';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = 'cb53e808c5e504b2a243e7fe5504b187';
    constructor(private http: HttpClient) {}
    getMovies(type: string) {
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
    getMovieDetailVideo(id: string) {
        return this.http
            .get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`)
            .pipe(
                switchMap((response) => {
                    return of(response.results);
                })
            );
    }

    getMovieImages(id: string) {
        return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
    }
    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
    }

    getMovieGenres() {
        return this.http.get<Genres>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`).pipe(
            switchMap((response) => {
                return of(response.genres);
            })
        );
    }
    getMoviesByGenre(genreId: number, page: number) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}&language=en-US`
            )
            .pipe(
                switchMap((response) => {
                    return of(response.results);
                })
            );
    }
}
