import express from 'express';

import test from './test';
import auth from './auth';
import user from './user';
import contact from './contact';
import record from './record';
import poll from './poll';
import vote from './vote';

const router = express.Router();

/** Routes for fake database, only enabled when environment is set */
router.use('/api/test', test);

router.use('/api', auth);

router.use('/api/user', user);
router.use('/api/contact', contact);
router.use('/api/record', record);
router.use('/api/poll', poll);
router.use('/api/vote', vote);

export default router;
