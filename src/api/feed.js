import { Router } from 'express';
import fetch from 'node-fetch';

const router = new Router();

router.get('/:jwt', async (req, res, next) => {
  try {
    const feeds = await fetch('http://localhost:3000/feed', {
      headers: {
        Authorization: `JWT ${req.params.jwt}`,
      },
    });

    console.log(req.params.jwt);
    console.log(feeds);
    res.status(200).json(feeds);
  } catch (err) {
    next(err);
  }
});

export default router;
