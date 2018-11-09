import express from 'express';

const router = express.Router();

import { PollCtrl } from '../controllers';

/**
 * Prefix /api/poll/
 */

router.get('/', PollCtrl.findAll);
router.post('/', PollCtrl.create);
router.get('/:id', PollCtrl.findOne);

export default router;
