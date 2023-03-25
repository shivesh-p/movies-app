import { Genre } from './movie.model';
export interface TvShowsDto {
    page: number;
    results: TvShows[];
    total_results: number;
    total_pages: number;
}

export interface TvShows {
    poster_path: string;
    popularity: number;
    id: number;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string;
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
    status: string;
    seasons: Seasons[];
    number_of_episodes: number;
    number_of_seasons: number;
    homepage: string;
    genres: Genre[];
}

export interface Seasons {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}
