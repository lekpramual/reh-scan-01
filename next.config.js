const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix: !debug ? "https://lekpramual-io.github.io/reh-scan-01/" : ""
};
