const exp = require('../../server');
const server = exp.server;
const app = exp.app;

const supertest = require('supertest');
const request = supertest(app);

afterEach(() => {
    server.close();
});

describe('/sampleget GET controller ', () => {

    it('responds with status 200', async done => {
        const response = await request.get('/sampleget');
        expect(response.status).toBe(200);
        done();
    });

    it('is correct message response', async done => {
        const response = await request.get('/sampleget');
        const actual = JSON.parse(response.text);
        const expected = {message: 'GET message back from the server'};

        expect(actual).toEqual(expected);
        done();
    });
});

describe('/samplepost POST controller ', () => {

    it('responds with status 200', async done => {
        const response = await request.post('/samplepost');
        expect(response.status).toBe(200);
        done();
    });

    it('is correct message response', async done => {
        const response = await request
            .post('/samplepost')
            .send({message: 'my message'});
            
        const actual = JSON.parse(response.text);
        const expected = {message: 'my message back from the server'};

        expect(actual).toEqual(expected);
        
        done();
    });
});