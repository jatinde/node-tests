const request = require('supertest')

const app = require('./server').app

it('should return response hello express!', (done) => {
    request(app)
        .get("/")
        .expect(200)
        .expect('hello express!')
        .end(done)
})