require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const setup = require('../setup');
const server = require('../../server');

describe('Tests example', () => {
  setup();
  it('should GET mainpage message', (done) => {
    chai
      .request(server)
      .get('/health')
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.result.toLowerCase().should.equal('ok');
        done();
      });
  });
});
