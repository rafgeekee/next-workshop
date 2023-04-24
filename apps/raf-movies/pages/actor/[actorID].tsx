import Link from 'next/link';
import { db } from "@next-workshop/models";

export async function getServerSideProps({ params }) {
  const actor = await db.actor.findUnique({
    where: {
      id: params.actorID,
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
    props : { actor }
  }
}


const Actor = ({ actor }) => {
  if (!actor) return <p>Actor not found</p>;

  return (
    <>
      <h2>Actor Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie) => (
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

export default Actor
