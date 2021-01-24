//lib
const Messages = require('../src/lib/Messages');

const listMessage = (req,res,next)=>{
	Messages.list()
	res.json('selam')
}

module.exports={
	listMessage
}