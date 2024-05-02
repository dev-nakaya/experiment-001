import type { Blog } from '~/types/blog'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const id: string | undefined = event.context.params?.id

  try {
    const data = await $fetch<Blog>(`/blogs/${id}`, {
      baseURL: config.apiUrl,
      headers: {
        'X-MICROCMS-API-KEY': config.apiKey,
      },
      params: query,
    })
    return data
  }
  catch {
    throw createError('"/blogs/[id]"コンテンツの取得に失敗しました。')
  }
})
