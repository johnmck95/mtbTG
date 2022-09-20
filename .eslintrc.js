module.exports = { 
    env: {
        // Browser global variables like `window` etc.
        browser: true, 
        // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        commonjs: true,
        // Enable all ECMAScript 6 features except for modules.
        es6: true, 
        // Jest global variables like `it` etc.
        jest: true,
        // Defines things like process.env when generating through node
        node: true
    },
    extends: [
        'react-app',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/react'
    ],
    rules: {
        'max-len': ['warn', 120],
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'jest/expect-expect': 'off'
    },
    overrides: [
        {
        'files': ['**/*.ts?(x)'],
        'rules': {
            // "additional-typescript-only-rule": "warn"
        }
        }
    ]
}