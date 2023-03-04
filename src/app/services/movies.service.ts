import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}
    getPopularMovies() {
        const httpParams = new HttpParams();
        return this.http.get('https://api.themoviedb.org/3/movie/popular', {
            params: httpParams.append('api_key', 'cb53e808c5e504b2a243e7fe5504b187'),
        });
    }
}
