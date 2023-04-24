import { db } from '@next-workshop/models';

export default async function handler(req, res) {
  const movies = await db.movie.findMany({
    include: {
      actors: true,
      genres: true,
    },
  });

  res.status(200).json(movies || []);
}