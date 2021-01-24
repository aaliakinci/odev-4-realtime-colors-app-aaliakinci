const client = require('./redisClient');
const redisClient = require('./redisClient');
function Room() {
	this.client = redisClient.getClient();
}

module.exports = new Room();

Room.prototype.upsert = function (roomName,data) {
	this.client.hset(
		'rooms',
		roomName,
		JSON.stringify({
			roomName,
			data,
			when: Date.now(),
		}),
		(err) => {
			if (err) {
				console.error(err);
			}
		},
	);
};
Room.prototype.list = function (cb) {
	this.client.hgetall('rooms', function (err, rooms) {
		let allRooms = [];
		if (err) {
			console.log(err);
			return cb([]);
		}

		for (let room in rooms) {
			allRooms.push(JSON.parse(rooms[room]));
		}
		return cb(allRooms)
	});
};
