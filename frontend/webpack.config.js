module.exports = {
      resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
                
                    loader: 'url-loader'
                
            }
        ]
    },
};
