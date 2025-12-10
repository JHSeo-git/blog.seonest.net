import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import { defineConfig, globalIgnores } from "eslint/config"
import tseslint from "typescript-eslint"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  tseslint.configs.recommended,
  prettier,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
    },
  },
  globalIgnores([
    "node_modules/",
    ".next/**",
    "out/**",
    "dist/**",
    "build/**",
    "next-env.d.ts",
    "public/",
    ".contentlayer/**",
    ".lintstagedrc.cjs",
  ]),
])

// /** @type {import('eslint').Linter.Config[]} */
// const eslintConfig = [
//   {
//     ignores: ["dist", "node_modules"],
//   },
//   ...compat.extends(
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "next/core-web-vitals",
//     "prettier"
//   ),
//   {
//     plugins: {
//       react,
//       "@typescript-eslint": typescriptEslint,
//     },

//     languageOptions: {
//       globals: {
//         ...globals.browser,
//       },
//     },

//     rules: {
//       "@next/next/no-html-link-for-pages": "off",
//       "@typescript-eslint/ban-ts-comment": [
//         "error",
//         {
//           "ts-ignore": "allow-with-description",
//         },
//       ],
//       "@typescript-eslint/no-empty-function": "off",
//       "@typescript-eslint/no-empty-interface": "warn",
//       "@typescript-eslint/no-unused-vars": "warn",
//     },
//   },
// ]

export default eslintConfig
