// ESLint flat config (v9+).
// Self-contained — no external imports required.
module.exports = [
  {
    files: ['scripts/cart.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        // Node.js
        module: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        console: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        // Browser
        window: 'readonly',
        document: 'readonly',
        // Jest
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'semi': ['error', 'always'],
      'quotes': ['warn', 'single', { avoidEscape: true }],
      'no-extra-semi': 'error',
      'no-irregular-whitespace': 'error',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'coverage/**',
      'cypress/**',
      'slick/**',
      'scripts/script.js',
      'scripts/script1.js',
      'scripts/script-category.js',
      'scripts/script-product.js',
    ],
  },
];
