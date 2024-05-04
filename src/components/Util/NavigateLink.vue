<script lang="ts" setup>
defineProps<{
  where: string
  content: string
}>()
</script>

<template>
  <NuxtLink
    :to="where"
    class="rounded-md border border-green-500 bg-green-50 px-2 py-1"
  >
    <span class="text-sm text-green-600">
      {{ content }}
    </span>
  </NuxtLink>
</template>
