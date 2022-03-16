/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');


const agent = session(app);
const country = {
  id: 'ARG',
  name: 'Argentina',
  image: 'imagen',
  continents: 'South America',
  capital: 'Buenos Aires',
  subregion: 'South America',
  area: 2780400,
  population: 45376763
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
    setTimeout(() => {}),
      agent.get('/countries').expect(200),
    );
    it('should get all Countri', () =>
    setTimeout(() => {}),
      agent.get('/countries')
      .expect(404)
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body).toEqual(''); // testeamos la respuesta con el body
      })
    );
  });
});
