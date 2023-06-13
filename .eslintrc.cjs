module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "plugin:jest-dom/recommended", "plugin:jsx-a11y/strict", "airbnb", "airbnb-typescript", "airbnb/hooks", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./vite.config.ts"]
  },
  plugins: ["react", "@typescript-eslint", "enforce-ids-in-jsx", "jest-dom", "jsx-a11y"],
  ignorePatterns: ["**/test-data/**"],
  rules: {
    // ### REACT RULES ###
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "error",
    // ### TESTING RULES ###
    // JEST-DOM
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-empty": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-focus": "error",
    "jest-dom/prefer-in-document": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "jest-dom/prefer-to-have-class": "error",
    "jest-dom/prefer-to-have-style": "error",
    "jest-dom/prefer-to-have-text-content": "error",
    "jest-dom/prefer-to-have-value": "error",
    // ### OTHER RULES ###
    "import/prefer-default-export": "off",
    "enforce-ids-in-jsx/missing-ids": 2,
    "enforce-ids-in-jsx/unique-ids": 2,
    "@typescript-eslint/naming-convention": ["error", {
      selector: "variableLike",
      format: ["camelCase", "PascalCase", "UPPER_CASE"]
    }, {
      selector: "interface",
      format: ["PascalCase"]
    }, {
      selector: "enum",
      format: ["UPPER_CASE"]
    }]
  }
};