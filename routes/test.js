import express from 'express';

const router = express.Router();

export default router;

import { AuthCtrl, UserCtrl, RecordCtrl } from '../controllers';

/**
 * Prefix /test/
 */

router.post('/fake/user', AuthCtrl.fakeUser);
router.post('/fake/contact', UserCtrl.fakeContacts);
router.post('/fake/record', RecordCtrl.fakeRecord);
