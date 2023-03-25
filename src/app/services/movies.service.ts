import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Movie, MovieCredits, MovieDto, MovieVideoDto } from '../movie.model';
import { TvShowsDto } from '../tvshows.model';
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

    searchMovies(page: number, searchValue?: string) {
        debugger;
        const uri = searchValue ? '/search/movie' : '/movie/popular';
        return this.http
            .get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
            .pipe(
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

    getTvShows(pageNo: number, searchValue?: string) {
        const uri = searchValue ? '/search/tv' : '/tv/popular';
        return this.http
            .get<TvShowsDto>(`${this.baseUrl}${uri}?api_key=${this.apiKey}&page=${pageNo}&query=${searchValue}`)
            .pipe(
                switchMap((response) => {
                    return of(response.results);
                })
            );
    }
}
