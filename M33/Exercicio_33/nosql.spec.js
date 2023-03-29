const req = require('supertest');
const API_URL = process.env.API_URL

describe('User Login', () => {
    it('NoSQL Injection', async () => {
        await req(API_URL)
            .post('/no-sql/login')
            .send({
                "email": "admin@juice-sh.op",
                "password": {
                    "$exists": true
                }
            })
            .set("Accept", "application/json")
            .then(response =>{
                expect(response.statusCode).toEqual(422)
            })
    });
});