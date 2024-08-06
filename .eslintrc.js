module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', '@tanstack/query'],
  rules: {
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignorePattern: '^import.*|^export\\s*|d=\\s*',
        tabWidth: 2,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: 'return' },
      { blankLine: 'always', prev: 'let', next: 'return' },
    ],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'always'],
    camelcase: 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T', 'R', 'D'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
