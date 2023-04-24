import type { Movie, Genre, Actor } from '@prisma/client';

export interface IMovie extends Movie {
  actors: Actor[],
  genres: Genre[],
}

export interface IGenre extends Genre {
  movies: IMovie[],
}

export interface IActor extends Actor {
  movies: IMovie[],
}