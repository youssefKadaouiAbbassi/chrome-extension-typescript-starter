import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
