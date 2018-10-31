import express from 'express';

const router = express.Router();

import { UserCtrl } from '../controllers';

router.get('/', UserCtrl.findAll);
router.get('/:id', UserCtrl.findOne);

export default router;
