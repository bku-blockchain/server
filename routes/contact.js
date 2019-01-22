import express from 'express';

const router = express.Router();

import { UserCtrl } from '../controllers';

/**
 * Prefix /contact/
 */

router.get('/', UserCtrl.getContacts);
router.post('/', UserCtrl.addContact);

export default router;
