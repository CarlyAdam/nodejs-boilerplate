require('should');
const setup = require('../setup');

describe('Database connection', () => {
  setup();
  describe('Example', () => {
    it('2 + 2 = 4', async () => {
      const a = 2 + 2;
      a.should.equal(4);
    });
  });
});
