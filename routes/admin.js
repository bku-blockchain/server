import express from 'express';

const router = express.Router();


import { AdminCtrl, PollCtrl } from '../controllers';

/**
 * Prefix /api/admin/
 */

router.get('/user', AdminCtrl.getAllUsers);
router.get('/poll', AdminCtrl.getAllPolls);
router.get('/vote', AdminCtrl.getAllVotes);
router.get('/event', AdminCtrl.getAllEvents);
router.get('/village', AdminCtrl.getAllVillages);
router.get('/booth', AdminCtrl.getAllBooths);
router.get('/record/:userID', AdminCtrl.getAllRecords);
router.get('/user/:username', AdminCtrl.getUserByUsername);

router.post('/poll', PollCtrl.create);

export default router;
