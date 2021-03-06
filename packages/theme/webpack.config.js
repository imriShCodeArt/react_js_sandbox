const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const path = require('path')
const deps = require('./package.json').dependencies
module.exports = {
  output: {
    publicPath: 'http://localhost:4000/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      features: path.resolve(__dirname, './src/features'),
      vars: path.resolve(__dirname, './vars'),
    },
  },
  devServer: {
    port: 4000,
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
      name: 'theme',
      filename: 'remoteEntry.js',
      remotes: {
        components: 'components@http://localhost:4010/remoteEntry.js',
      },
      exposes: {
        './Theme': './src/Theme2',
        './Column': './src/components/shared/Column',
        './Section': './src/components/shared/Section'
      },
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
