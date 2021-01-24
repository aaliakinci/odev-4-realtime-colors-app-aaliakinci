const client = require('./redisClient');
const redisClient = require('./redisClient');
const shortId = require('shortid');
const _ = require("lodash");
function Messages() {
	this.client = redisClient.getClient();
}

module.exports = new Messages();

Messages.prototype.upsert = function (data) {
	this.client.hset(
		'messages:'+data.roomName,
		shortId.generate(),
		JSON.stringify({
			data,
			when:Date.now()
		}),
		(err) => {
			if (err) {
				console.error(err);
			}
		},
	);
};
Messages.prototype.list = function (roomName,cb) {
	this.client.hgetall('messages:'+roomName, function (err, messages) {
		let allMessages = [];
		if (err) {
			console.log(err);
			return cb([]);
		}
		for (let message in messages) {
			allMessages.push(JSON.parse(messages[message]));
		}
		return cb(_.orderBy(allMessages, "when", "asc"));
	});
};
