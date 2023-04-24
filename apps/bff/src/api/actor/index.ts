import * as express from 'express';
import { db } from "@next-workshop/models";

export const actorRouter = express.Router();

actorRouter.get('/', async (req, res) => {
  const actors = await db.actor.findMany({
    include: {
      movies: {
        include: { 
          genres: true, 
          actors: true 
        } 
      },
    },
  });
  res.send(actors || []);
});

actorRouter.get('/:id', async (req, res) => {
  const actor = await db.actor.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      movies: { 
        include: { 
          genres: true, 
          actors: true 
        }
      },
    },
  });
  res.send(actor || {});
});

export default actorRouter;