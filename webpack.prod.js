const config = require('./webpack.config');

module.exports = (env) => {
    const conf = config(env);
    return {
        ...conf,
        mode: 'production',
        plugins: [
            ...conf.plugins,
            new webpack.DefinePlugin({
                __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
            }),
        ],
        entry: {
            boomslang: path.resolve(__dirname, 'src', 'index.js'),
        },
    };
};
