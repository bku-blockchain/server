import express from 'express';

const router = express.Router();

import { RecordCtrl } from '../controllers';

/**
 * Prefix /api/record/
 */

router.get('/', RecordCtrl.getRecords);
router.post('/', RecordCtrl.addRecord);

export default router;
