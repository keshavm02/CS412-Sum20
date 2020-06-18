const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('Weather API testing', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/weather')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('should return html in the response', function (done) {
        chai.request(app)
            .get('/weather')
            .end((err, response) => {
                expect(response).to.be.html;
                done();
            })
    });
    it('should return 400 fail code when wrong city name entered', function (done) {
        chai.request(app)
            .post('/weather')
            .send({city: 'gibberishCityName'})
            .end((err, response) => {
                expect(response).to.have.status(400);
                done();
            })
    });
})