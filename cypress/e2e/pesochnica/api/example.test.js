const axios = require('axios');

describe('API Test', () => {
    it('should return a 200 status code', async () => {
        const response = await axios.get('https://sandbox.staging.it-incubator.ru/');
        expect(response.status).toEqual(200);
    })
});

