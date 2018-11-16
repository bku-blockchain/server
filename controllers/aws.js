/**
 * Don't use AWS S3
 */


import mongoose from 'mongoose';
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';

import * as config from '../config';

const User = mongoose.model('User');


AWS.config.update({
  accessKeyId: config.aws.AccessKeyID,
  secretAccessKey: config.aws.SecretAccessKey
});


console.log('AWS:');
console.log('Access Key ID:', config.aws.AccessKeyID);
console.log('Secret Access Key:', config.aws.SecretAccessKey);

/**
 * @param {*} id: userID
 * @param {*} file: { originalname, path, ext, filename }
 */
export const uploadAvatar = async (id, file, cb) => {
  var stream = fs.createReadStream(file.path);
  var s3 = new AWS.S3({ signatureVersion: 'v4' }); // fix bug can't upload image on the first time submit
  s3.putObject({
    Bucket: config.aws.S3Bucket,
    ACL: 'public-read', // access control list
    Key: `most/user/${id}/${Math.floor(Date.now() / 1000)}_${file.name}`,
    Body: stream
  }, (err, data) => {
    if (err) return cb(err);
    return cb(null, {
      url: `most/user/${id}/${Math.floor(Date.now() / 1000)}_${file.name}`
    });
  });
};
