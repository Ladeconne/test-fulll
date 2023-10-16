module.exports = {
    default: [
      "--require-module ts-node/register",
      "--require dist/features/**/*.js",
      "--publish-quiet",
    ].join(" "),
  };