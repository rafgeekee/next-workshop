import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IGenre } from '@next-workshop/types';
import { API_URL } from '../../consts';

export function Genre() {
  const { genreID } = useParams();

  const [genre, setGenre] = useState<IGenre>();

  useEffect(() => {
    fetch(`${API_URL}/api/genre/${genreID}`)
      .then((res) => res.json())
      .then((data) => setGenre(data));
  }, [genreID]);

  if (!genre?.name) return (<p>Genre not found</p>);

  return (
    <>
      <h2>Genre Name: {genre.name}</h2>
      <p>Movies:</p>
      <ul>
        {genre.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <p>
                {movie.title} - {movie.year}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Genre;
