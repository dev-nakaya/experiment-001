export type Content = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Contents = {
  totalCount: number
  offset: number
  limit: number
}

export type Image = {
  url: string
  width: number
  height: number
}
