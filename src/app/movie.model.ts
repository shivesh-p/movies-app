export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    revenue: number;
    runtime: number;
    status: string;
    genres: Genre[];
}

export interface MovieDto {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieVideoDto {
    id: number;
    results: MovieVideo[];
}

export interface MovieVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface MovieImages {
    id: number;
    backdrops: Backdrop[];
    posters: Backdrop[];
    logos: Backdrop[];
}

export interface Backdrop {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface MovieCredits {
    id: number;
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
    department?: string;
    job?: string;
}
