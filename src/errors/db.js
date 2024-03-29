class DatabaseError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DatabaseError);
    }
    this.name = 'DatabaseError';
  }
}

module.exports = DatabaseError;
