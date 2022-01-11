module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '22fdfef0da8ba5d0b0258fc927dc8aec'),
  },
});
