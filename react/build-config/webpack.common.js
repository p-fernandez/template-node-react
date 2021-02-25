const path = require('path')

module.exports = {
  target: 'web',
  entry: [
    '@babel/polyfill',
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    path.join(__dirname, '../src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', {"runtime": "automatic"}],
              '@babel/preset-env'
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-react-jsx']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      api: path.resolve(__dirname, '../src/api'),
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers')
    },
    enforceExtension: false,
    extensions: ['.json', '.js', '.jsx', ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
}
