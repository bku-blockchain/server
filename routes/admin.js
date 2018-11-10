import express from 'express';

const router = express.Router();


import { AdminCtrl } from '../controllers';

/**
 * Prefix /api/admin/
 */

router.get('/user', AdminCtrl.getAllUsers);
router.get('/poll', AdminCtrl.getAllPolls);
router.get('/vote', AdminCtrl.getAllVotes);
router.get('/record/:userID', AdminCtrl.getAllRecords);
router.get('/user/:username', AdminCtrl.getUserByUsername);

export default router;
