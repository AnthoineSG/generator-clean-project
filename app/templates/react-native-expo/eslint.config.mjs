import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import i18next from 'eslint-plugin-i18next';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/.expo/*',
      '**/.storybook/storybook.requires.ts',
      '**/metro.config.js',
      '**/babel.config.js',
      '**/expo-env.d.ts',
      '**/react-app-env.d.ts',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'expo',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-native/all',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ),
  ),
  {
    ...i18next.configs['flat/recommended'],
    ignores: [
      '**/sandbox.tsx',
      '**/*.stories.tsx',
      '**/*.stories.ts',
      '**/*.test.tsx',
      '**/*.test.ts',
    ],
  },
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'react-native': fixupPluginRules(reactNative),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
      // ! IMPORT
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            { pattern: 'react', group: 'builtin' },
            { pattern: 'react-native', group: 'builtin' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/no-unresolved': 'error',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'error',
      'import/no-cycle': 'warn',

      // ! CUSTOM
      'react/display-name': 'off',
      'react-native/no-inline-styles': 'off',
      'react-native/no-raw-text': 'off',
      'react-native/no-color-literals': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },
];
