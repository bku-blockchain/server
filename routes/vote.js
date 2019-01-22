import express from 'express';

const router = express.Router();

import { VoteCtrl } from '../controllers';

/**
 * Prefix /vote/
 */

router.get('/', VoteCtrl.findAll);
router.get('/:pollID', VoteCtrl.findInOnePoll);
router.get('/:pollID/:userID', VoteCtrl.findOneByUser);

router.post('/', VoteCtrl.create);

export default router;
