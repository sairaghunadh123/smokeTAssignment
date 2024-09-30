const db = require('../config/db');

const User = {
    create: async (name) => {
        const [result] = await db.query('INSERT INTO User (name) VALUES (?)', [name]);
        return { id: result.insertId, name };
    }
};

module.exports = User;
