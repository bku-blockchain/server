import express from 'express';

const router = express.Router();

import { VoteCtrl } from '../controllers';

// TODO
router.post('/', VoteCtrl.create);

export default router;
