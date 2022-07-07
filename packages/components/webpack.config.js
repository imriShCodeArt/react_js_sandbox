const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
const deps = require('./package.json').dependencies
module.exports = {
  output: {
    publicPath: 'http://localhost:4010/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      components: path.resolve(__dirname, './src/'),
    },
  },

  devServer: {
    port: 4010,
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
      name: 'components',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Avatar': './src/Avatar',
        './Breadcrumbs': './src/Breadcrumbs',
        './ButtonBase': './src/Button/ButtonBase',
        './Link': './src/Link',
        './Heading5': './src/Typography/Heading/Heading5',
        './Menu': './src/Menu',
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
