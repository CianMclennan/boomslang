const { model, Schema } = require('mongoose');

const Screen = model('Screen', new Schema({
	screen_id: {
		type: String,
		required: true
	},
	path: String,
	component: {
		type: Object, 
		required: true
	}
}));

module.exports = Screen; 