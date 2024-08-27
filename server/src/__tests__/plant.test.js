const request = require('supertest');
const app = require('../index');

describe('Plant API', () => {
  it('should create a new plant', async () => {
    const res = await request(app)
      .post('/plants')
      .send({
        name: 'Tomato',
        type: 'Vegetable',
        plantDate: '2024-04-10',
        phLevel: 6.5,
        feedingSchedule: 'Every 2 weeks'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Tomato');
  });
});
