const ONE_HOUR = 60 * 60; // in seconds

export default {
  secretKey: process.env.SECRET_KEY || 'server secret key',
  tokenExpire: 5 * ONE_HOUR,

  email: {
    address: process.env.EMAIL_ADDRESS || 'server email address',
    password: process.env.EMAIL_PASSWORD || 'server email password'
  }
};
