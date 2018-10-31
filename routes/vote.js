import express from 'express';

const router = express.Router();

import { VoteCtrl } from '../controllers';

router.get('/', VoteCtrl.findAll);
router.post('/', VoteCtrl.create);

export default router;
