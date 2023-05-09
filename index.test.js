// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const { TestWatcher } = require('jest');


describe('./musicians endpoint', () => {
    // Write your tests here
    test('Testing Musicians endpoint', async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })
    
    test('Testing Musicicans name', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData[0]).toHaveProperty('name')
    })

    test('Testing Musicians instrument', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData[0]).toHaveProperty('instrument')
    })
    
    test('Testing Musicians correct name', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData[0].name).toBe('Mick Jagger')
    })
    
    test('Testing Musicians correct instrument', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData[0].instrument).toBe('Voice')
    })
    test('Testing Musicians ID', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData[0]).toHaveProperty('id')
    })

})