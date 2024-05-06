<script lang="ts" setup>
import type { Blogs } from '~/types/blog'

defineProps<{
  blogs: Blogs
}>()
</script>

<template>
  <ul class="flex flex-wrap">
    <li
      v-for="blog in blogs.contents"
      :key="blog.id"
      class="w-1/2"
    >
      <NuxtLink
        :to="`/blogs/${blog.id}`"
        class="mx-4 mb-16 block"
      >
        <img
          :src="blog.eyecatch.url"
          :width="blog.eyecatch.width"
          :height="blog.eyecatch.height"
          alt="Blog eyecatch"
          loading="lazy"
          class="h-56 w-full rounded object-cover"
        >
        <dl>
          <dt class="mt-4 text-xl font-bold">
            {{ blog.title }}
          </dt>
          <dd>
            <ul class="mt-2 flex gap-4">
              <li
                v-for="category in blog.categories"
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
                {{ formarDate(blog.publishedAt) }}
              </time>
            </p>
          </dd>
        </dl>
      </NuxtLink>
    </li>
  </ul>
</template>
