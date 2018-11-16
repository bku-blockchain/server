import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

import * as config from '../config';

const router = express.Router();

const upload = multer({
  dest: path.join(__dirname, '../upload/')
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
router.post(
  '/upload/avatar', upload.single('avatar'),

  // Handle file uploaded
  (req, res, next) => {
    const { file } = req;
    // console.log(req.file);
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
    if (!file || !file.filename || !file.path || !file.originalname) {
      return res.status(400).send({ message: 'File is not exist' });
    }

    const SIZE_5_MB = 5 * 1024 * 1024;
    if (file.size > SIZE_5_MB) {
      return res.status(400).send({ message: 'File should be smaller 5MB' });
    }

    if (!file.mimetype.match(/image\/*/)) {
      return res.status(400).send({ message: 'File upload should be an image' });
    }

    next();
  },

  // Resize file to 128 x 128
  (req, res, next) => {
    const { file } = req;
    const ext = file.mimetype.split('/')[1];
    const filename = `IMG_${Math.floor(Date.now() / 1000)}_${file.filename}.${ext}`;
    const path = `${file.destination}${filename}`;
    // console.log(mimetype, ext, filename, path);

    sharp(file.path).resize(128, 128).toFile(path, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      fs.unlink(file.path, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        req.file.url = `${config.app.staticURL}/upload/${filename}`;
        next();
      });
    });
  },

  // Update User Info
  UserCtrl.updateUserAvatar
);

export default router;
