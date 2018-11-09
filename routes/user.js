import express from 'express';

const router = express.Router();

import { UserCtrl } from '../controllers';

/**
 * Prefix /api/user/
 */

router.get('/', UserCtrl.findAll);

router.get('/id/:id', UserCtrl.findOneById);
router.get('/:username', UserCtrl.findOneByUsername);

router.put('/', UserCtrl.updateUserInfo);

export default router;
