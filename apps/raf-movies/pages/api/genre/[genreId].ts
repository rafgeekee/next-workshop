import { db } from '@next-workshop/models';

export default async function handler(req, res) {
  const { genreId } = req.query;
  
  const genre = await db.genre.findUnique({
    where: {
      id: genreId,
    },
    include: {
      movies: { 
        include: { 
          actors: true,
          genres: true,
        } 
      },
    },
  });

  res.status(200).json({ genre });
}