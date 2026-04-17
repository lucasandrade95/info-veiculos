const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');

describe('CRUD Veículos', () => {
  let id;

  it('Deve criar um veículo', async () => {
    const res = await request(app).post('/veiculos').send({
      placa: 'ABC1234', chassi: '123', renavam: '456', modelo: 'Uno', marca: 'Fiat', ano: 2020
    });
    id = res.body.id;
    expect(res.status).to.equal(201);
  });

  it('Deve listar veículos', async () => {
    const res = await request(app).get('/veiculos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('Deve atualizar um veículo', async () => {
    const res = await request(app).put(`/veiculos/${id}`).send({ modelo: 'Palio' });
    expect(res.body.modelo).to.equal('Palio');
  });

  it('Deve deletar um veículo', async () => {
    const res = await request(app).delete(`/veiculos/${id}`);
    expect(res.status).to.equal(204);
  });
});
