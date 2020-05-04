module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:testing-library/react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "testing-library"
    ],
    "parser": "babel-eslint",
    "overrides": [
        {
            "files": [
                "**/*.test.js",
                "**/*.test.jsx"
            ]
        }
    ],
    "rules": {
        "no-console": 0,
        "linebreak-style": 0,
        "react/jsx-uses-vars": 1,
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debug": "warn",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-indent": [
            2,
            4
        ],
        "react/jsx-indent-props": [
            2,
            4
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/forbid-prop-types": [
            1,
            {
                "forbid": [
                    "any",
                ]
            }
        ],
        "react/jsx-boolean-value": [
            0
        ]
    }
};
