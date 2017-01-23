import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV;
const IS_PROD = NODE_ENV === 'production' ? true : false;
const IS_DEV = NODE_ENV !== 'production' ? true : false;

const dirs = {
    compiled: path.resolve(__dirname, '../compiled'),
    public: IS_DEV ? '/' : '/tg_theme_customizer/',
    node_modules: path.resolve(__dirname, 'node_modules')
};


const config = {
    // Entry points to the project
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        './app/index.js',
    ],

    output: {
        path: dirs.compiled,
        publicPath: dirs.public,
        filename: '[name].[hash:6].js',
        chunkFilename: 'chunks/[id].[hash:6].js',
        library: '[name]'
    },

    // Server Configuration options
    devServer: {
        contentBase: '../compiled/', // Relative directory for base of server
        devtool: 'eval',
        outputPath: dirs.compiled,
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },

    devtool: IS_PROD ? 'cheap-source-map': 'eval',

    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),

        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),

        // Moves files
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
            IS_PROD,
            IS_DEV,
            PUBLIC_PATH: JSON.stringify(dirs.public)
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),

        new CleanWebpackPlugin(['compiled'], {
            root: path.join(__dirname, '..'),
            verbose: false
        })
    ],

    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.js$/, // All .js files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [dirs.node_modules],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ],
    },
};

if (IS_PROD) {
    config.plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

}

if (IS_DEV) {
    // config.plugins.push(
    //     // Enables Hot Modules Replacement
    //     new webpack.HotModuleReplacementPlugin()
    // );

}

module.exports = config;