module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'max-len': [1, 200],
    'prefer-const': ['error'],
    'eqeqeq': ['error'],
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
