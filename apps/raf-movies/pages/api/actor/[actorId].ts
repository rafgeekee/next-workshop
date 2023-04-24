import { db } from '@next-workshop/models';

export default async function handler(req, res) {
  const { actorId } = req.query;
  
  const actor = await db.actor.findUnique({
    where: {
      id: actorId,
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

  res.status(200).json({ actor });
}