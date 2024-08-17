const { describe, expect, it } = require('@jest/globals');
const faker = require('../index');

describe('Faker', () => {

    it('should generate a random user', () => {
        const user = faker.user.generate();
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('password');
    });

});