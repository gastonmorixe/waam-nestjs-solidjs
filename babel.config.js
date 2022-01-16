module.exports = {
  ignore: ['./node_modules'],
  presets: [
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
      },
    ],
    '@babel/preset-env',
    ['solid', { generate: 'ssr', hydratable: true }],
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
}
