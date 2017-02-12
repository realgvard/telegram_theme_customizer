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

    entry: {
        app: [
            './app/index.js',
        ]
    },

    devtool: IS_PROD ? 'cheap-source-map': 'eval',

    output: {
        path: dirs.compiled,
        publicPath: dirs.public,
        filename: '[name].[hash:6].js',
        chunkFilename: 'chunks/[id].[hash:6].js',
        library: '[name]'
    },

    // Server Configuration options
    devServer: {
        contentBase: dirs.compiled, // Relative directory for base of server
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },

    plugins: [

        // Allows error warnings but does not stop compiling.
        new webpack.NoEmitOnErrorsPlugin(),

        new ExtractTextPlugin({
            filename: 'app.css',
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
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    ],

    module: {
        rules: [
            {
                // React-hot loader and
                test: /\.js$/, // All .js files
                use: [
                    {
                        loader: 'react-hot-loader' // react-hot is like browser sync and babel loads jsx and es6-7
                    },
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: [dirs.node_modules],
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                    ],
                })
            },

            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' // react-hot is like browser sync and babel loads jsx and es6-7
                    },
                    {
                        loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                    }
                ],
            },

            {
                test: /\.tdesktop-theme$/,
                use: 'raw-loader'
            },

            {
                test: /\.svg$/,
                use: [
                    'babel-loader',
                    'svg-react-loader'
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
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );

    config.entry.app.unshift('webpack/hot/only-dev-server');

}

module.exports = config;