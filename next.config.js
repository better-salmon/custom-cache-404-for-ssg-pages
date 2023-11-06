/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    // incrementalCacheHandlerPath: require.resolve("./cache-handler-new-example"),
    incrementalCacheHandlerPath: require.resolve("./cache-handler"),
  },
};
