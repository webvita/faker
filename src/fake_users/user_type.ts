/**
 * Represents a user.
 *
 * @typedef {Object} User
 * @property {number | string} id - The unique identifier of the user.
 * @property {string} email - The email address of the user.
 * @property {string} gender - The gender of the user.
 * @property {string} ip_address - The IP address of the user.
 * @property {string} password - The password of the user.
 * @property {string} passwordConfirmation - The confirmation password of the user.
 * @property {string} deviceId - The device ID of the user.
 */
type User = {
    id: number | string;
    email: string;
    gender: string;
    ip_address: string;
    password: string;
    passwordConfirmation: string;
    deviceId: string;
};

export default User;