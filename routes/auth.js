import express from 'express';

const router = express.Router();

import { AuthCtrl } from '../controllers';

router.post('/login', AuthCtrl.login);
router.post('/forgot', AuthCtrl.forgotPassword);

/** this route is only for testing */
router.post('/create', AuthCtrl.createUser);

/** Other routes require token from user */
router.use('/', AuthCtrl.authorization);

router.post('/reset', AuthCtrl.resetPassword);
router.post('/logout', AuthCtrl.logout);

export default router;
