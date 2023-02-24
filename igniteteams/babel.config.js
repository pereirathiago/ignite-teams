module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routers': './src/routers',
            '@screens': './src/screens',
            '@storages': './src/storages',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  };
};
