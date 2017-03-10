module.exports = {
    entry: "./src/main.ts",

    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
        yamlparser: "empty"
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/src",
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        loaders: [
          {
              test: /\.ts?$/,
              exclude: /node_modules/,
              loaders: ["ts-loader"]
          }
        ]
    }
};