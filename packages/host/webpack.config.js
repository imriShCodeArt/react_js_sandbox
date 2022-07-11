const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
const deps = require('./package.json').dependencies
module.exports = {
  output: {
    publicPath: 'http://localhost:8080/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      theme: path.resolve(__dirname, './src/theme'),
      features: path.resolve(__dirname, './src/features'),
      assets: path.resolve(__dirname, './src/assets'),
      vars: path.resolve(__dirname, './vars'),
    },
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        components: 'components@http://localhost:4010/remoteEntry.js',
        cards: 'cards@http://localhost:4020/remoteEntry.js',
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: deps['@emotion/react'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',      
    }),
  ],
}
