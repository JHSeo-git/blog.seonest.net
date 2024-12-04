import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import jsonFormat from "eslint-plugin-json-format"
import react from "eslint-plugin-react"
import tailwindcss from "eslint-plugin-tailwindcss"
import globals from "globals"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ["**/dist"],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier"
  ),
  {
    plugins: {
      "json-format": jsonFormat,
      react,
      tailwindcss,
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "tailwind.config.cjs",
      },
    },

    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsParser,
    },
  },
  {
    files: ["**/*.cjs"],

    languageOptions: {
      parser: "espree",
      ecmaVersion: 2020,
      sourceType: "script",
    },
  },
]
