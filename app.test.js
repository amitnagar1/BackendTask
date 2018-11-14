
const request = require('supertest');
const server = require('./app');
beforeAll(async () => {
 // do something before anything else runs
 console.log('Jest starting!');
});

// Basic route tests
describe('Basic Route TESTS', () => {
    // Test to check home page
 test('Home Page GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('This is a sample page...');
 });

 
 test('TESTING POST ROUTE', async () => {
    const response = await request(server).post('/v1/links').send({originalUrl:'sampleurl'});
    expect(response.status).toEqual(200);
    
});

test(' GET All Links /alllinks', async () => {
    const response = await request(server).get('/alllinks');
    expect(response.status).toEqual(200);
    expect(response.body).toContainEqual({
        id:  1,
    originalUrl: "www.testurl.com",
    hashedUrl: "testhashedurl"
    });
 });

 test('Update a POST, A PUT REQUEST', async () => {
    const response = await request(server).put('/v1/updatelink/testhashedurl').send({originalUrl:'www.changedurl.com'});
    expect(response.status).toEqual(200);
        
});


test('DELETE A POST', async () => {
    const response = await request(server).delete('/v1/deletelink/testhashedurl');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
        id:  1,
    originalUrl: "www.changedurl.com",
    hashedUrl: "testhashedurl"
    });
});    


});

