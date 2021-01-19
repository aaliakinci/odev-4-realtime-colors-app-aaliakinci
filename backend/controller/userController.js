const createError = require('http-errors')
const User = require('../Models/User');
const bcrypt = require('bcryptjs');

const createUser = async(req,res) => {
	try {
		const {username,password} = req.body;
		bcrypt.hash('password', 8, async(err, hash) => {
		const user = new User ({
			username,
			password:hash
		});
		const result = await user.save()
		res.status(200).json(result);
	});
	} catch (error) {
		res.json(error);
	}
}

const loginUser = async(req,res) => {
	try {
		const { username, password } = req.body;
		const user = await findUserForLogin(username, password);
		const token = await createToken(user);
		res.status(200).json({ user, token });
	} catch (error) {
		res.json(error);
	}
}
//find user
const findUserForLogin = async(username,password) => {
	const user = await User.findOne({ username });
	if (!user) {
		console.log('kullanıcı bulamadım');
		throw createError(400, 'Girilen kullanıcı adı ya da parola hatalı');
	}
	const checkPassword = bcrypt.compare(password, user.password);
	if (!checkPassword) {
		throw createError(400, 'Girilen email/şifre hatalı');
	}
	return user;
}
//create token
const createToken = async (user) => {
	const token = await jwt.sign(
		{ _id: user._id, username: user.username},
		process.env.JWT_SECRET_KEY,
		{ expiresIn: '2d' },
	);
	return token;
};



module.exports={
	createUser,
	loginUser
}

