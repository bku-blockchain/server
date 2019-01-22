import express from 'express';

const router = express.Router();


import { AdminCtrl, PollCtrl, TicketCtrl, EventCtrl } from '../controllers';

/**
 * Prefix /admin/
 */

router.post('/login', AdminCtrl.login);


router.use('/', AdminCtrl.authorization);


// Users
router.get('/user', AdminCtrl.getAllUsers);
router.get('/user/:username', AdminCtrl.getUserByUsername);

router.get('/record/:userID', AdminCtrl.getAllRecords);

// Voting
router.get('/poll', AdminCtrl.getAllPolls);
router.get('/vote', AdminCtrl.getAllVotes);

router.post('/poll', PollCtrl.create);

// Events
router.get('/event', AdminCtrl.getAllEvents);

router.get('/village', AdminCtrl.getAllVillages);
router.post('/village', EventCtrl.createVillage);

router.get('/booth', AdminCtrl.getAllBooths);
router.post('/booth', EventCtrl.createBooth);


// Tickets
router.get('/', TicketCtrl.getTickets);
router.get('/:tid', TicketCtrl.getTicketByID);
router.get('/user/:uid', TicketCtrl.getTicketsByUserID);


export default router;
