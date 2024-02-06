const glob = require("glob");
const path = require("path");

module.exports = {
  entry: glob.sync("./boardapp/static/js/main.*.js").reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
  mode: "production",
  output: {
    path: `${__dirname}/extension`,
    filename: "content.js",
    chunkFilename: "[name].chunk.js",
    sourceMapFilename: "[name].map",
  },
};
