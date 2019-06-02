module.exports.isAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send({
      error: 'Missing credentials',
    });
  }
  next();
};
