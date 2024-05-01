import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

export default withNuxt(
  ...compat.extends(
    'plugin:tailwindcss/recommended',
  ),
)
