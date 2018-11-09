import express from 'express';

const router = express.Router();

export default router;

import { AuthCtrl, UserCtrl } from '../controllers';

/**
 * Prefix /api/test/
 */

router.post('/fake/user', AuthCtrl.fakeUser);
router.post('/fake/contact', UserCtrl.fakeContacts);
