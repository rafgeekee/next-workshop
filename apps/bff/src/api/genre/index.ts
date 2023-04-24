import * as express from 'express';
import { db } from '@next-workshop/models';

export const genreRouter = express.Router();

genreRouter.get('/', async (req, res) => {
  const genres = await db.genre.findMany({
    include: {
      movies: { 
        include: { 
          actors: true, 
          genres: true 
        } 
      },
    },
  });
  res.send(genres || []);
});

genreRouter.get('/:id', async (req, res) => {
  const genre = await db.genre.findUnique({
    where: {
      id: req.params.id,
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
  res.send(genre || {});
});

export default genreRouter;
