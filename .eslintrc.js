module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
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
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
