import express from 'express';

const router = express.Router();

import { PollCtrl } from '../controllers';

/**
 * Prefix /poll/
 */

router.get('/', PollCtrl.findCurrentPolls);
router.get('/past', PollCtrl.findPastPolls);
router.get('/future', PollCtrl.findFuturePolls);

router.get('/:id', PollCtrl.findOne);

router.post('/', PollCtrl.create);


export default router;
