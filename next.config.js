/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  cacheHandler: require.resolve("./cache-handler"),
  cacheMaxMemorySize: 0,
};
