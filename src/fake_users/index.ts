/**
 * Generates fake user objects.
 * @template User - The type of user object to generate.
 */
/* eslint-disable import/no-extraneous-dependencies */
import { randomBytes } from 'node:crypto';
import Generator from '../generator';
import User from './user_type';
import allUsers from './data/users'


class FakeUserGenerator extends Generator<User> {
    constructor(private readonly NAMESPACE: string = 'namespace') {
        super();
    };

    private generate_fake_email() {
        return `${this.NAMESPACE}.${randomBytes(Math.random() * 6)}@inbox.testmail.app`;
    }

    generate(): User {
        const rand = Math.floor(Math.random() * allUsers.length);
        const user = allUsers[rand];
        return {
            ...user,
            passwordConfirmation: user.password,
            email: this.generate_fake_email(),
        };
    }






}


export default FakeUserGenerator;