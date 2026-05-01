// ESLint config (v9+ flat config)
module.exports = [
  {
    files: ['scripts/cart.js', 'scripts/cart-ui.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        // Browser
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        // Node + Jest
        module: 'writable',
        require: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        // Functions from cart.js used by cart-ui.js
        createCart: 'readonly',
        addItem: 'readonly',
        removeItem: 'readonly',
        updateQuantity: 'readonly',
        getSubtotal: 'readonly',
        getItemCount: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'semi': 'error'
    }
  },
  {
    ignores: [
      'scripts/script.js',
      'scripts/script1.js',
      'scripts/script-category.js',
      'scripts/script-product.js'
    ]
  }
];
