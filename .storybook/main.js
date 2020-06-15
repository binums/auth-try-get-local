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
};
