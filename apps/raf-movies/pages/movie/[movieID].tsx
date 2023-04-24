import Link from 'next/link';
import { db } from '@next-workshop/models';

export async function getServerSideProps({ params }) {
  const movie = await db.movie.findUnique({
    where: {
      id: params.movieID,
    },
    include: {
      actors: true,
      genres: true,
    },
  });

  return {
    props: { movie },
  };
}

const Movie = ({ movie }) => {
  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <h2>Movie Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      Actors:
      <ul>
        {movie.actors.map((actor) => (
          <li key={actor.id}>
            <Link href={`/actor/${actor.id}`}>{actor.name}</Link>
          </li>
        ))}
      </ul>
      Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>
            <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movie;
