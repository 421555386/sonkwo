vue init webpack-simple sonkwo

cnpm install

cnpm  i  vue-router -S

cnpm install css-loader --save-dev
cnpm install style-loader --save-dev
    {
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ],
      },

      {
        test: /\.(jpg|png|eot|svg|ttf|woff|woff2|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    }
cnpm install element-ui --save-dev



npm run dev

npm run build