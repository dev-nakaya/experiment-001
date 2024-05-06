<script lang="ts" setup>
const { data: blogs, error } = await useFetch('/api/blogs')

if (error.value) {
  throw createError({
    fatal: true,
  })
}
</script>

<template>
  <div class="mx-auto max-w-5xl px-16 py-12">
    <UtilPageTitle>
      Blogs
    </UtilPageTitle>
    <BlogCard :blogs="blogs!" />
  </div>
</template>
