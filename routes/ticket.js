import express from 'express';

const router = express.Router();

import { TicketCtrl } from '../controllers';

/**
 * Prefix /api/ticket/
 */

router.get('/tickets', TicketCtrl.getTickets);
router.post('/tickets', TicketCtrl.createTicket);
router.get('/tickets/:tid', TicketCtrl.getTicketByID);

router.get('/users/:uid', TicketCtrl.getTicketByUserID);

router.get('/events', TicketCtrl.getEvents);

router.get('/villages', TicketCtrl.getVillages);
router.post('/villages', TicketCtrl.createVillage);

router.get('/booths', TicketCtrl.getBooths);
router.post('/booths', TicketCtrl.createBooth);

router.get('/entries', TicketCtrl.getEntries);
router.post('/entries', TicketCtrl.createEntry);

router.get('/interests', TicketCtrl.getAllInterests);
router.post('interests', TicketCtrl.createInterest);
router.get('/interests/:uid', TicketCtrl.getInterestByUserID);
router.put('/interests/:uid', TicketCtrl.updateInterest);

export default router;

