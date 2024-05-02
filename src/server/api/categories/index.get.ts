import type { Categories } from '~/types/category'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  try {
    const data = await $fetch<Categories>('/categories', {
      baseURL: config.apiUrl,
      headers: {
        'X-MICROCMS-API-KEY': config.apiKey,
      },
      params: query,
    })
    return data
  }
  catch {
    throw createError('"/categories"コンテンツの取得に失敗しました。')
  }
})
