module.exports = {
  extends: ['react-app', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'max-len': [1, 100],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-unused-vars': ['error'],
      },
    },
  ],
};
