import express from 'express';

const router = express.Router();

import { UserCtrl } from '../controllers';

// TODO
router.get('/', UserCtrl.findAll);
router.post('/', UserCtrl.create);
router.get('/:id', UserCtrl.findOne);

export default router;
