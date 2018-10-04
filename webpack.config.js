const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
  plugins: [new Dotenv()],
  target: "node",
  entry: "./src/components/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true
};
