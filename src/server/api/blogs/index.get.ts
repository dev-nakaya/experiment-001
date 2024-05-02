import type { Blogs } from '~/types/blog'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  try {
    const data = await $fetch<Blogs>('/blogs', {
      baseURL: config.apiUrl,
      headers: {
        'X-MICROCMS-API-KEY': config.apiKey,
      },
      params: query,
    })
    return data
  }
  catch {
    throw createError('"/blogs"コンテンツの取得に失敗しました。')
  }
})
