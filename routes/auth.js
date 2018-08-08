import express from 'express';

const router = express.Router();

import { AuthCtrl } from '../controllers';

router.use('/', AuthCtrl.authorization);

router.post('/auth/login', AuthCtrl.login);
router.post('/auth/forgot', AuthCtrl.forgotPassword);
router.post('/auth/reset', AuthCtrl.resetPassword);
router.get('/logout', AuthCtrl.logout);

export default router;
