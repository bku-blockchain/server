import express from 'express';

const router = express.Router();

import { AuthCtrl } from '../controllers';

router.post('/login', AuthCtrl.login);
router.post('/forgot', AuthCtrl.forgotPassword);
router.post('/create', AuthCtrl.createUser);
router.post('/fake-user', AuthCtrl.fakeUser);

/** Other routes require token from user */
router.use('/', AuthCtrl.authorization);
router.get('/authorized', AuthCtrl.testAuthorized);

router.get('/reset', AuthCtrl.resetPassword);
router.get('/logout', AuthCtrl.logout);

export default router;
