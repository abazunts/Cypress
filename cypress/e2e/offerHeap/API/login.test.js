const axios = require('axios');

describe('Auth', () => {
    it('Website Load', async () => {
        const response = await axios.get('https://offerhunt.staging.it-incubator.ru');

        expect(response.status).toBe(200);
    });

    it('login', async () => {
        const url = 'https://offerhunt.staging.it-incubator.ru/api/auth/public/login';
        const body = {
            email: 'yunastya2@gmail.com',
            password: 'Passwordoffer1'
        };

        try {
            const response = await axios.post(url, body);

            expect(response.status).toBe(200);
            expect(response.data.message).toBe('Authentication successful');

        } catch (error) {

            console.error(error);
        }
    });
});
