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


export const uploadAvatar = (id, file) => {
  if (!file || !file.name || !file.path) {
    return new Promise.reject({ errorMessage: 'File is not exist or file is wrong' });
  }

  const SIZE_5_MB = 5 * 1024 * 1024;
  if (file.size > SIZE_5_MB) {
    return new Promise.reject({ errorMessage: 'File must have size smaller or equal 5MB' });
  }

  var stream = fs.createReadStream(file.path);
  var s3 = new AWS.S3({ signatureVersion: 'v2' }); // fix bug can't upload image on the first time submit
  var type = file.type.split('/')[1];
  s3.putObject({
    Bucket: config.aws.S3Bucket,
    ACL: 'public-read', // access control list
    Key: `most/user/${id}/${Date.now() / 1000}_${file.name}`,
    Body: stream
  }, (err, data) => {
    if (err) {
      return new Promise.reject({ errorMessage: 'Error when upload file to S3' });
    }
    return Promise.resolve(data);
  });
};
