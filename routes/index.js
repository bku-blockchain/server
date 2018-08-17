import express from 'express';

import auth from './auth';
import user from './user';
import poll from './poll';
import vote from './vote';

const router = express.Router();

router.use('/api', auth);

router.use('/api/user', user);
router.use('/api/poll', poll);
router.use('/api/vote', vote);

export default router;
