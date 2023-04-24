import * as express from 'express';
import movieRouter from './movie';
import actorRouter from './actor';
import genreRouter from './genre';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.send('Welcome to the Next Workshop BFF');
});

apiRouter.use('/movie', movieRouter);
apiRouter.use('/actor', actorRouter);
apiRouter.use('/genre', genreRouter)

export default apiRouter;