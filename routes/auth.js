import express from 'express';

const router = express.Router();

import { AuthCtrl } from '../controllers';

router.use('/', AuthCtrl.authorization);

router.post('/login', AuthCtrl.login);
router.post('/forgot', AuthCtrl.forgotPassword);
router.post('/reset', AuthCtrl.resetPassword);
router.get('/logout', AuthCtrl.logout);

export default router;
