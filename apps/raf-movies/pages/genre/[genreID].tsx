import Link from 'next/link';
import { db } from "@next-workshop/models";

export async function getStaticPaths() {
  const genres = await db.genre.findMany({});

  const paths = genres.map((genre) => ({
    params: { genreID: genre.id },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const genre = await db.genre.findUnique({
    where: {
      id: params.genreID,
    },
    include: {
      movies: { 
        include: { 
          actors: true,
          genres: true,
        } 
      },
    },
  })

  return {
    props : { genre }
  }
}


const Genre = ({ genre }) => {
  if (!genre) return <p>Genre not found</p>;

  return (
    <>
      <h2>Genre Name: {genre.name}</h2>
      <p>Movies:</p>
      <ul>
        {genre.movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <p>
                {movie.title} - {movie.year}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Genre
