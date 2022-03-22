// // This file is not going through babel transformation.
// // So, we write it in vanilla JS
// // (But you could use ES2015 features supported by your Node.js version)
// const withCSS = require("@zeit/next-css");
// const debug = process.env.NODE_ENV !== "production";

// module.exports = withCSS({
//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//       "/about": { page: "/about" },
//       "/skills": { page: "/skills" },
//       "/works": { page: "/works" },
//       "/works/pnudt12": { page: "/works/pnudt12" },
//     };
//   },
//   assetPrefix: !debug ? "https://nijoow.github.io/" : "",
//   webpack: (config, { dev }) => {
//     // Perform customizations to webpack config
//     // console.log('webpack');
//     // console.log(config.module.rules, dev);
//     config.module.rules = config.module.rules.map((rule) => {
//       if (rule.loader === "babel-loader") {
//         rule.options.cacheDirectory = false;
//       }
//       return rule;
//     });
//     // Important: return the modified config
//     return config;
//   },
// });
module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
