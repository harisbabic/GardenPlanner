const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const request = require('supertest');
const pool = require('../config/db');  // Import the pool instance
const { app, server } = require('../index');  // Import both the app and server

describe('Plant API', () => {
  it('should create a new plant', async () => {
    const res = await request(app)
      .post('/api/plants')
      .send({
        name: 'Tomato',
        type: 'Vegetable',
        plantDate: '2024-08-27',
        phLevel: 6.5,
        feedingSchedule: 'Every 2 weeks'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Tomato');
  });
});

afterAll(async () => {
  await pool.end();  // Close the database connection
  server.close();  // Close the server connection
});
