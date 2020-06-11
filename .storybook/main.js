const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName: '[sha1:hash:hex:4]',
              context: path.resolve(__dirname, 'src'),
              hashPrefix: 'my-custom-hash',
            },
          },
        },
        require.resolve('sass-loader'),
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
