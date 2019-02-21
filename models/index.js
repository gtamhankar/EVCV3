const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
//mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

if (process.env.MONGODB_URI)
{
	// executes from heroku
	mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}
else
{
	// executes from local machine
	mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
}

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
