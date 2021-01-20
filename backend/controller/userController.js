const createError = require('http-errors');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		bcrypt.hash(password, 8, (err, hash) => {
			const user = new User({
				username,
				password: hash,
			});
			const promise = user.save();
			promise
				.then((result) => {
					res.status(200).json(result);
				})
				.catch((err) => {
					res.json({status:414,message:err.message});
				});
		});
	} catch (error) {
		res.json({ status: 414, message: error.message });
	}
};

const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await findUserForLogin(username, password);
		const token = await createToken(user);

		res.json({ user, token });
	} catch (error) {
		res.json({ status: error.code, message: error.message });
	}
};
//find user
const findUserForLogin = async (username, password) => {
	try {
		const resultUser = await User.findOne({ username });

		if (!resultUser) {
			throw createError({ code: 404, message: 'Girilen kullanıcı hatalı' });
		}
		const checkPassword = await bcrypt.compare(password, resultUser.password);
		console.log(checkPassword);
		if (!checkPassword) {
			throw createError({ code: 404, message: 'Girilen  parola hatalı' });
		}
		return resultUser;
	} catch (error) {
		throw error;
	}
};
//create token
const createToken = async (user) => {
	const token = await jwt.sign(
		{ _id: user._id, username: user.username },
		process.env.JWT_SECRET_KEY,
		{ expiresIn: '2d' },
	);
	return token;
};

module.exports = {
	createUser,
	loginUser,
};
