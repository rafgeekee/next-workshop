import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { IMovie } from '@next-workshop/types';
import { API_URL } from '../../consts';

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/movie`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  if (!movies[0]) return <p>No Movies Found</p>;

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>Title: {movie.title}</h2>
          <p>Plot: {movie.plot}</p>
          Actors:
          <ul>
            {movie.actors.map((actor) => (
              <li key={actor.id}>
                <Link to={`/actor/${actor.id}`}>
                  {actor.name}
                </Link>
              </li>
            ))}
          </ul>
          Genres:
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <Link to={`/genre/${genre.id}`}>
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
}

export default Home;
