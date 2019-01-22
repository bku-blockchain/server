import express from 'express';

const router = express.Router();

import { AuthCtrl } from '../controllers';

/**
 * Prefix: /
 */

router.post('/login', AuthCtrl.login);
router.post('/forgot', AuthCtrl.forgotPassword);
router.post('/create', AuthCtrl.createUser);

/** Other routes require token from user */
router.use('/', AuthCtrl.authorization);
router.get('/authenticated', AuthCtrl.testAuthenticated);

router.post('/reset', AuthCtrl.resetPassword);
router.get('/logout', AuthCtrl.logout);

export default router;
