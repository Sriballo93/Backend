const request = require('supertest');
const app = require('../server');

// describe('Post Show', () => {
//   it('should create a new Show', async () => {
//     const res = await request(app)
//       .post('/api/v1/shows/')
//       .send({
//         name: 'The walking dead',
//         characters: ['6408c0e4177d0161267de5c4'],
//       });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body.status).toEqual('Success');
//   });
// });

// describe('Post Character', () => {
//   it('should create a new Character', async () => {
//     const res = await request(app).post('/api/v1/characters/').send({
//       name: 'Judith Grimes',
//       status: 'dead',
//       town: 'The kingdom',
//     });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body.status).toEqual('Success');
//   });
// });

// describe('Get Show', () => {
//   it('should get all Shows', async () => {
//     const res = await request(app).get('/api/v1/shows/');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.status).toEqual('Success');
//   });
// });

describe('Delete Character', () => {
  it('should delete a character by id', async () => {
    const res = await request(app).delete(
      '/api/v1/characters/6408d62c35eefdfd613a33f2'
    );
    expect(res.statusCode).toEqual(204);
    expect(res.body.status).toEqual(undefined);
  });
});
