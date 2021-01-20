const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: [true,'Kullanıcı adı boş bırakılamaz'],
		unique:[ true,'Bu kullanıcı adı kullanılıyor'],
	},
	password: {
		type: String,
		required: [true,'Şifre alanı boş bırakılamaz'],
	},
});
UserSchema.post('save', function (error, _, next) {
	next( error.code === 11000 
		?   new Error('Bu kullanıcı adı zaten var')
		:   error)
});

module.exports = mongoose.model('user', UserSchema);
