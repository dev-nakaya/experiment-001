<!-- eslint-disable vue/no-v-html -->
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
        v-html="blog?.content"
      />
    </section>
    <section
      v-if="blog?.relates[0]"
      class="border-t pt-16"
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
  </article>
</template>
