<script lang="ts" setup>
const { data: blogs, error } = await useFetch('/api/blogs')

if (error.value) {
  throw createError({
    fatal: true,
  })
}
</script>

<template>
  <BlogCard :blogs="blogs!" />
</template>
