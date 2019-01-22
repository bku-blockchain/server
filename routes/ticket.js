import express from 'express';

const router = express.Router();

import { TicketCtrl } from '../controllers';

/**
 * Prefix /ticket/
 */

router.get('/:eventID', TicketCtrl.getMyTicketByEventID);
router.post('/:eventID', TicketCtrl.createTicket);

router.get('/entries', TicketCtrl.getEntries);
router.post('/entries', TicketCtrl.createEntry);

export default router;
