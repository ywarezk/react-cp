module.exports = {
    entry: './test.js',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader'
          },
          {
            test: /\.(svg|png|jpeg|jpg|bmp)$/,
            use: 'file-loader'
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
      },
      mode: 'development',
      devtool: 'inline-source-map'
}