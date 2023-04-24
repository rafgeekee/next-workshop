import Link from 'next/link';
import { db } from '@next-workshop/models';

export async function getServerSideProps() {
  const movies = await db.movie.findMany({
    include: {
      actors: true,
      genres: true,
    },
  });

  return {
    props: { movies },
  };
}

export function Index({ movies }) {
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
                <Link href={`/actor/${actor.id}`}>
                  {actor.name}
                </Link>
              </li>
            ))}
          </ul>
          Genres:
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <Link href={`/genre/${genre.id}`}>
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

export default Index;
