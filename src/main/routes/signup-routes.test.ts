import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
    test('Should return an account on success', async () => {
        await request(app)
            .post('/api/signup')
            .send({
                name: 'Jairo',
                email: 'jairopereira_dias@hotmail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            })
            .expect(200)
    })
})