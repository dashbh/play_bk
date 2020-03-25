module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        }
      ],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: require.resolve('style-loader')
        },
        {
          loader: "css-loader"
        },
        {
          loader: require.resolve('sass-loader')
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx', '.scss');
    return config;
  }
};
