import { db } from '@next-workshop/models';

export default async function handler(req, res) {
  const genres = await db.genre.findMany({
    include: {
      movies: { include: { genres: true, actors: true } },
    },
  });

  res.status(200).json(genres || []);
}