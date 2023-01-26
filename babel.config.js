module.exports = function (api) {
  api.cache.forever();
  return {
    plugins: ["macros"],
  };
};

console.log("babel config file loaded");
