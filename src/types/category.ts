import type { Content, Contents } from './common'

export type Category = {
  name: string
} & Content

export type Categories = {
  contents: Category[]
} & Contents
