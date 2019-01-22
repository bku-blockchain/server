import express from 'express';

const router = express.Router();

import { EventCtrl } from '../controllers';

/**
 * Prefix /event/
 */

router.get('/', EventCtrl.getEvents);
router.get('/villages', EventCtrl.getVillages);
router.get('/booths', EventCtrl.getBooths);

router.get('/:eventID/interests', EventCtrl.getMyInterestsInEvent);

router.get('/:eventID/:vid/interest', EventCtrl.checkInterestedInVilalge);
router.post('/:eventID/:vid/interest', EventCtrl.setInterestInVillage);


export default router;

