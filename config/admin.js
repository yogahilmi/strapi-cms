module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd58d98d3615a731f69226558ce26ff0'),
  },
});
