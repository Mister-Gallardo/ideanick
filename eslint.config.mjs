import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import eslintJs from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import nodePlugin from 'eslint-plugin-n'

export default defineConfig([
  // Глобальные игноры
  globalIgnores([
    'node_modules/',
    '**/dist/',
    '**/*.d.ts',
    'eslint.config.mjs',
    'backend/*.config.*',
    'backend/generated/',
  ]),

  // Базовые правила JS
  eslintJs.configs.recommended,

  // TS rules + type checking
  ...tseslint.configs.recommendedTypeChecked,

  // Общие правила + parserOptions
  {
    plugins: {
      import: importPlugin,
    },

    languageOptions: {
      parserOptions: {
        project: ['./backend/tsconfig.eslint.json', './webapp/tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          'newlines-between': 'always',
        },
      ],
    },
  },

  // 🟦 BACKEND rules
  {
    files: ['backend/**/*.ts'],
    plugins: {
      n: nodePlugin,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'n/no-process-env': 'error',
    },
  },

  // 🟩 WEBAPP rules
  {
    files: ['webapp/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@ideanick/backend/**',
                '!@ideanick/backend/**/',
                '!@ideanick/backend/**/input',
                '!@ideanick/backend/**/can',
              ],
              allowTypeImports: true,
              message:
                'Only types and input schemas are allowed to be imported from backend workspace',
            },
          ],
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-restricted-syntax': [
        'error',
        {
          selector: '[object.type=MetaProperty][property.name=env]',
          message: 'Use instead import { env } from "lib/env"',
        },
      ],
    },
  },
])
