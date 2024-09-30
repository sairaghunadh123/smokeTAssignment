const db = require('../config/db');

const Address = {
    create: async (userId, address) => {
        const [result] = await db.query('INSERT INTO Address (user_id, address) VALUES (?, ?)', [userId, address]);
        return { id: result.insertId, userId, address };
    }
};

module.exports = Address;
