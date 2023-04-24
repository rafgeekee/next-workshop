import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IActor } from '@next-workshop/types';
import { API_URL } from '../../consts';

export function Actor() {
  const { actorID } = useParams();

  const [actor, setActor] = useState<IActor>();

  useEffect(() => {
    fetch(`${API_URL}/api/actor/${actorID}`)
      .then((res) => res.json())
      .then((data) => setActor(data));
  }, [actorID]);

  if (!actor?.name) return (<p>Actor not found</p>);

  return (
    <>
      <h2>Actor Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie) => (
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

export default Actor;
