import * as express from 'express';
import { db } from '@next-workshop/models';

export const movieRouter = express.Router();

movieRouter.get('/', async (req, res) => {
  const movies = await db.movie.findMany({
    include: {
      actors: true,
      genres: true,
    },
  });
  res.send(movies || []);
});

movieRouter.get('/:id', async (req, res) => {
  const movie = await db.movie.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      actors: true,
      genres: true,
    },
  });
  res.send(movie || {});
});

export default movieRouter;
