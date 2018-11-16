import express from 'express';
import multer from 'multer';
import path from 'path';


const router = express.Router();

const upload = multer({
  dest: path.join(__dirname, '../tmp/')
});

import { UserCtrl } from '../controllers';

/**
 * Prefix /api/user/
 */

router.get('/', UserCtrl.findAll);

router.get('/id/:id', UserCtrl.findOneById);
router.get('/:username', UserCtrl.findOneByUsername);

router.put('/', UserCtrl.updateUserInfo);

/**
 * @param avatar: field name of form upload
 * Headers: please dont set Content-Type when request
 */
router.post('/upload/avatar', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  res.send(req.file);

  /**
   * Example file upload:
  {
    "fieldname": "avatar",
    "originalname": "1200px-Node.js_logo.svg.png",
    "encoding": "7bit",
    "mimetype": "image/png",
    "destination": "/home/huynhsamha/Documents/MoST/server/tmp/",
    "filename": "196aec7ececa824346008fb810ba72b0",
    "path": "/home/huynhsamha/Documents/MoST/server/tmp/196aec7ececa824346008fb810ba72b0",
    "size": 53357
  }
   */
});

export default router;
