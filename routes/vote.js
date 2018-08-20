import express from 'express';

const router = express.Router();

import { VoteCtrl } from '../controllers';

// TODO
router.get('/', VoteCtrl.findAll); // only for test
router.post('/', VoteCtrl.create);

export default router;
