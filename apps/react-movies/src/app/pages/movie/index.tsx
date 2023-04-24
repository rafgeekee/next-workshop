import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IMovie } from '@next-workshop/types';
import { API_URL } from '../../consts';

export function Movie() {
  const { movieID } = useParams();

  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetch(`${API_URL}/api/movie/${movieID}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieID]);

  if (!movie?.title) return <p>Movie not found</p>;

  return (
    <>
      <h2>Movie Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      Actors:
      <ul>
        {movie.actors.map((actor) => (
          <li key={actor.id}>
            <Link to={`/actor/${actor.id}`}>{actor.name}</Link>
          </li>
        ))}
      </ul>
      Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movie;
