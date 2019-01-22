import express from 'express';

const router = express.Router();


import { ReportCtrl } from '../controllers';

/**
 * Prefix /report/
 */

router.get('/num_booths_each_star', ReportCtrl.statisticNumBoothsEachStar);
router.get('/num_stars_each_booth', ReportCtrl.statisticNumStarsEachBooth);
router.get('/num_stars_booth/:bid', ReportCtrl.statisticNumStarsOneBooth);

export default router;
