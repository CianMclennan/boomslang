const config = require('./webpack.config');

module.exports = (env) => {
	const conf = config(env);
	return {
		...conf,
		mode: 'development',
		performance: {
			hints: false,
		},
		devtool: 'source-map',
	};
};
