// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      { pattern: "tests/**/*.spec.js", watched: false }
    ],
    preprocessors: {
      "tests/**/*.spec.js": ["webpack", "sourcemap"]
    },
    webpack: {
      mode: "development",
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            }
          }
        ]
      },
      resolve: { extensions: [".js", ".jsx"] }
    },
    reporters: ["progress"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-sourcemap-loader"
    ]
  });
};
