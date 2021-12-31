const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-css-modules-preset",
    "storybook-dark-mode",
  ],
  webpackFinal: async config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test(".svg"),
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });

    return config;
  },
};
