const should = require('should');
const setup = require('../setup');

describe('Database connection', () => {
  setup();
  describe('Example', () => {
    it('2 + 2 = 4', async () => {
      should(2 + 2).equal(4);
    });
  });
});