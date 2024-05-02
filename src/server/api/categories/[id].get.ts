import type { Category } from '~/types/category'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const id: string | undefined = event.context.params?.id

  try {
    const data = await $fetch<Category>(`/categories/${id}`, {
      baseURL: config.apiUrl,
      headers: {
        'X-MICROCMS-API-KEY': config.apiKey,
      },
      params: query,
    })
    return data
  }
  catch {
    throw createError('"/categories/[id]"コンテンツの取得に失敗しました。')
  }
})
