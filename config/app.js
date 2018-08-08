export default {
  secretKey: process.env.SECRET_KEY || 'server secret key',
  email: {
    address: process.env.EMAIL_ADDRESS || 'server email address',
    password: process.env.EMAIL_PASSWORD || 'server email password'
  }
};
