module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eba1c269c5e5dc32203f9135ddcad942'),
  },
});
