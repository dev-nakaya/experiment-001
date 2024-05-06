<!-- eslint-disable vue/no-v-html -->
<script lang='ts' setup>
import { load } from 'cheerio'
import hljs from 'highlight.js'
import type { HighlightResult } from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

const route = useRoute()
const id = route.params.id
const { data: blog, error } = await useFetch(`/api/blogs/${id}`, {
  params: {
    depth: 2,
  },
})

if (error.value) {
  throw createError({
    fatal: true,
  })
}

// リッチエディタのHTMLからcheerioオブジェクトを生成
const $ = load(blog.value!.content)

// コードブロックのファイル名が入力されている場合
$('div[data-filename]').each((_, elm) => {
  $(elm).prepend(`<span>${$(elm).attr('data-filename')}</span>`)
})

// コードブロックのシンタックスハイライト処理
$('pre code').each((_, elm) => {
  const language = $(elm).attr('class') || ''
  let result: HighlightResult

  if (language) {
    // 言語入力ありの場合、入力された言語で判定
    result = hljs.highlight($(elm).text(), {
      language: language.replace('language-', ''),
    })
  }
  else {
    // 言語入力なしの場合、自動で判定
    result = hljs.highlightAuto($(elm).text())
  }

  $(elm).html(result.value)
  $(elm).addClass('hljs')
})

const highlightedContent = $.html()
</script>

<template>
  <article class="mx-auto max-w-5xl px-16 py-12">
    <section>
      <div class="border-b pb-16">
        <img
          :src="blog?.eyecatch.url"
          :width="blog?.eyecatch.width"
          :height="blog?.eyecatch.height"
          alt="Blog eyecatch"
          loading="lazy"
          class="w-full rounded"
        >
        <h1 class="mt-8 text-4xl font-bold">
          {{ blog?.title }}
        </h1>
        <ul class="mt-4 flex items-center gap-4">
          <li
            v-for="category in blog?.categories"
            :key="category.id"
          >
            <UtilNavigateLink
              where="/"
              :content="category.name"
            />
          </li>
        </ul>
        <p class="mt-4">
          <time>
            {{ formarDate(blog?.publishedAt) }}
          </time>
        </p>
      </div>
      <div
        class="blog-content my-16"
        v-html="highlightedContent"
      />
    </section>
    <section
      v-if="blog?.relates[0]"
      class="border-t py-16"
    >
      <h1 class="text-3xl font-bold">
        関連記事
      </h1>
      <ul class="my-8 flex items-center justify-between gap-16">
        <li
          v-for="relate in blog.relates"
          :key="relate.id"
          class="w-1/2"
        >
          <NuxtLink :to="`/blogs/${relate.id}`">
            <img
              :src="relate.eyecatch.url"
              :width="relate.eyecatch.width"
              :height="relate.eyecatch.height"
              alt="Related blog eyecatch"
              loading="lazy"
              class="rounded"
            >
            <dl>
              <dt class="mt-4 text-xl font-bold">
                {{ relate.title }}
              </dt>
              <dd>
                <ul class="mt-2 flex gap-4">
                  <li
                    v-for="category in relate.categories"
                    :key="category.id"
                  >
                    <UtilNavigateLink
                      where="/"
                      :content="category.name"
                    />
                  </li>
                </ul>
                <p class="mt-2">
                  <time>
                    {{ formarDate(relate.publishedAt) }}
                  </time>
                </p>
              </dd>
            </dl>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="border-t pt-16">
      <NuxtLink
        to="/"
        class="group block w-1/3 rounded-lg border p-6 hover:bg-slate-50"
      >
        <div
          class="mb-4 inline-flex items-center rounded-full border bg-slate-100 p-1.5 group-hover:border-green-500 group-hover:bg-green-50"
        >
          <span>
            <Icon
              name="mdi:arrow-left"
              size="1.5em"
              class="group-hover:text-green-600"
            />
          </span>
        </div>
        <p>
          ブログ一覧に戻る
        </p>
      </NuxtLink>
    </section>
  </article>
</template>
