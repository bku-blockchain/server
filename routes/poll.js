import express from 'express';

const router = express.Router();

import { PollCtrl } from '../controllers';

// TODO
router.get('/', PollCtrl.findAll);
router.post('/', PollCtrl.create);
router.get('/:id', PollCtrl.findOne);

export default router;
