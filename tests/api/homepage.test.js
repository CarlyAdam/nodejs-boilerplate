require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const setup = require('../setup');
const server = require('../../server');

describe('Health test (Example)', () => {
  setup();
  it('should GET health 401 error', (done) => {
    chai
      .request(server)
      .get('/health')
      .end((err, res) => {
        res.status.should.equal(401);
        done();
      });
  });
  it('should GET health ok', (done) => {
    chai
      .request(server)
      .get('/health')
      .set('Authorization', 'health-check')
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.result.toLowerCase().should.equal('ok');
        done();
      });
  });
});
