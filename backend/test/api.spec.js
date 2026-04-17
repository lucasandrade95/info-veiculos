const request = require('supertest');
const app = require('../src/app');
const expect = require('chai').expect;

describe('Veiculos API', () => {
  it('GET /api/veiculos deve retornar array', async () => {
    const res = await request(app).get('/api/veiculos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});
