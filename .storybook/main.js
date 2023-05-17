module.exports = {
  stories: ['../**/*.story.mdx', '../**/*.story.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/react',
};
