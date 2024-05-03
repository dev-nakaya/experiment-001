<script lang="ts" setup>
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
</script>

<template>
  <article class="px-8">
    <section class="border-b pb-16">
      <img
        :src="blog?.eyecatch.url"
        :width="blog?.eyecatch.width"
        :height="blog?.eyecatch.height"
        alt="Blog Eyecatch"
        loading="lazy"
        class="rounded"
      >
      <h1 class="mt-8 text-4xl font-bold">
        {{ blog?.title }}
      </h1>
      <ul class="mt-4 flex items-center gap-4">
        <li
          v-for="category in blog?.categories"
          :key="category.id"
          class="rounded-md border border-green-500 bg-green-50 px-2 py-1"
        >
          <NuxtLink
            to="/"
            class="text-green-600"
          >
            # {{ category.name }}
          </NuxtLink>
        </li>
      </ul>
      <p class="mt-2">
        <time>
          {{ formarDate(blog?.publishedAt) }}
        </time>
      </p>
    </section>
    <section class="py-16">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="blog?.content" />
    </section>
    <section
      v-if="blog?.relates[0]"
      class="border-t pt-16"
    >
      <h2 class="text-2xl font-bold">
        関連記事
      </h2>
      <ul class="my-8 flex items-center justify-between gap-16">
        <li
          v-for="relate in blog.relates"
          :key="relate.id"
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
            <h3 class="mt-4 text-xl font-bold">
              {{ relate.title }}
            </h3>
            <ul class="mt-1 flex gap-4">
              <li
                v-for="category in relate.categories"
                :key="category.id"
              >
                # {{ category.name }}
              </li>
            </ul>
            <p class="mt-1">
              <time>
                {{ formarDate(relate.publishedAt) }}
              </time>
            </p>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </article>
</template>
