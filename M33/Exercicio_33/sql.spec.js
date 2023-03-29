describe('User Login', () => {
    it('SQL Injection', async () => {
        await req(API_URL)
        .post('/sql/login')
        .send({
            "email": "admin' or 1=1 --",
            "password": "admin"
        })
        .set("Accept", "application/json")
        .then(response =>{
            expect(response.statusCode).toEqual(401)
        })
    });
});