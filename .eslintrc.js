module.exports = { 
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    extends: [
        "react-app",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    rules: {
        "max-len": ["warn", 100],
        "no-console": "warn",
        "no-unused-vars": "warn",
        "quotes": ["warn", "double"],
        "react/react-in-jsx-scope": "off",
    },
    overrides: [
        {
        "files": ["**/*.ts?(x)"],
        "rules": {
            // "additional-typescript-only-rule": "warn"
        }
        }
    ]
}