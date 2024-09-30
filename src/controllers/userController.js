const User = require('../models/user');
const Address = require('../models/address');

const registerUser = async (req, res) => {
    const { name, address } = req.body;

    try {
        const user = await User.create(name);
        await Address.create(user.id, address);
        res.status(201).json({ message: 'User and address added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { registerUser };
