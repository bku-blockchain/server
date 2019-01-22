import express from 'express';

import test from './test';
import admin from './admin';
import auth from './auth';
import user from './user';
import contact from './contact';
import record from './record';
import poll from './poll';
import vote from './vote';
import event from './event';
import ticket from './ticket';
import report from './report';

const router = express.Router();

/** Routes for fake database, only enabled when environment is set */
router.use('/test', test);
router.use('/admin', admin);

router.use('/', auth);

router.use('/user', user);
router.use('/contact', contact);
router.use('/record', record);
router.use('/poll', poll);
router.use('/vote', vote);
router.use('/event', event);
router.use('/ticket', ticket);
router.use('/report', report);

export default router;
