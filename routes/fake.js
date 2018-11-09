import express from 'express';

const router = express.Router();

export default router;

import { AuthCtrl } from '../controllers';

router.post('/fake-user', AuthCtrl.fakeUser);
