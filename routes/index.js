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
router.use('/test', test);
router.use('/admin', admin);

/** TODO: Deadline !!!, don't check token */
router.use('/ticket', ticket);

router.use('/', auth);

router.use('/user', user);
router.use('/contact', contact);
router.use('/record', record);
router.use('/poll', poll);
router.use('/vote', vote);

export default router;
