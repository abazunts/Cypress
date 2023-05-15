const request = require('supertest');
const app = 'https://offerhunt.staging.it-incubator.ru/';

describe('API Авторизации', () => {
    it('Должен успешно выполнить вход', async () => {
        const response = await request(app)
            .post('/api/auth/public/login')
            .send({
                username: 'nastyamysh@bk.ru',
                password: 'Passwordoffer1',
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('accessToken');
    });

    it('Должен вернуть ошибку 401 для неверных данных', async () => {
        const response = await request(app)
            .post('/api/auth/admin/login')
            .send({
                username: 'incorrect_username',
                password: 'incorrect_password',
            });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Incorrect credentials');
    });
});


