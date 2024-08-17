/**
 * Represents a Faker class.
 */
import FakeUser from "./fake_users"

class Faker {
    public user = new FakeUser();
    constructor() { }
}

export default new Faker(); // Exporting the Faker class as default