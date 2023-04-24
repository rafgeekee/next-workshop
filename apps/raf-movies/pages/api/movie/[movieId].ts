import { db } from '@next-workshop/models';

export default async function handler(req, res) {
  const { movieId } = req.query;
  
  const movie = await db.movie.findUnique({
    where: {
      id: movieId,
    },
    include: {
      actors: true,
      genres: true,
    },
  });

  res.status(200).json({ movie });
}