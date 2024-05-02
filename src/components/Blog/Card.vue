<script lang="ts" setup>
import type { Blogs } from '~/types/blog'

defineProps<{
  blogs: Blogs
}>()
</script>

<template>
  <ul class="flex flex-wrap justify-between">
    <li
      v-for="blog in blogs.contents"
      :key="blog.id"
      class="w-1/2 p-8"
    >
      <NuxtLink to="/">
        <img
          :src="blog.eyecatch.url"
          :width="blog.eyecatch.width"
          :height="blog.eyecatch.height"
          alt="Blog Eyecatch"
          loading="lazy"
          class="rounded"
        >
        <h2 class="mt-4 text-lg font-bold">
          {{ blog.title }}
        </h2>
        <ul class="mt-1 flex gap-4">
          <li
            v-for="category in blog.categories"
            :key="category.id"
          >
            # {{ category.name }}
          </li>
        </ul>
        <p class="mt-1">
          <time>
            {{ formarDate(blog.publishedAt) }}
          </time>
        </p>
      </NuxtLink>
    </li>
  </ul>
</template>
