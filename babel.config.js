module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@storages': './src/storages',
          '@types': './src/types',
          '@utils': './src/utils',
          '@queries': './src/queries',
        },
      },
    ],
  ],
};
