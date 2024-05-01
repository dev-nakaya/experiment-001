import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

export default withNuxt(
  ...compat.extends(
    'plugin:tailwindcss/recommended',
  ),
  {
    ignores: [
      '.output',
      '.data',
      '.nuxt',
      '.nitro',
      '.cache',
      'dist',
      'node_modules',
      'logs',
      '*.log',
      '.DS_Store',
      '.fleet',
      '.idea',
      '.env',
      '.env.*',
      '!.env.example',
      '.eslintcache',
    ],
  },
)
