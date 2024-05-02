import type { Content, Contents, Image } from './common'
import type { Category } from './category'

export type Blog = {
  title: string
  description: string
  content: string
  eyecatch: Image
  categories: Category[]
  relates: Blog[]
} & Content

export type Blogs = {
  contents: Blog[]
} & Contents
