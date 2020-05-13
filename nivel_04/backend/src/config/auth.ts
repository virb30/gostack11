export default {
  jwt: {
    secret: process.env.APP_SECRET || 'supersecretappkey',
    expiresIn: '1d',
  },
};
