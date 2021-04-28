const request  = require('supertest')
const app = require('./index.js')
// Supertest creates a mocking server
// Jest just evaluates data


describe('express data endpoints testing', () => {
    test('that /api/books route returns books', async() => {
      const response = await request(app)
        .get('/api/books')
        .expect(200)
        .expect('Content-Type', /json/)

      expect(response.body[0].title).toBe('Monster Hunter')        
    });

    test("that '/api/books/1' returns the first books object that matches the id of 1", async () => {
      const response = await request(app)
        .get('/api/books/3')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body.id).toBe(3)  
    })

    test("")
})