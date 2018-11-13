import express from 'express';

import test from './test';
import admin from './admin';
import auth from './auth';
import user from './user';
import contact from './contact';
import record from './record';
import poll from './poll';
import vote from './vote';
import ticket from './ticket';

const router = express.Router();

/** Routes for fake database, only enabled when environment is set */
router.use('/api/test', test);
router.use('/api/admin', admin);

/** TODO: Deadline !!!, don't check token */
router.use('/api/ticket', ticket);

router.use('/api', auth);

router.use('/api/user', user);
router.use('/api/contact', contact);
router.use('/api/record', record);
router.use('/api/poll', poll);
router.use('/api/vote', vote);

export default router;
