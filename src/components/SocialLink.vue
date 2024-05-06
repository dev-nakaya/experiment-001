<script lang="ts" setup>
import { socials } from '~/assets/json/master.json'
</script>

<template>
  <ul class="flex gap-4">
    <li
      v-for="social in socials"
      :key="social.id"
    >
      <a
        :href="social.link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          :src="`icon/${social.icon}`"
          :alt="`View my ${social.name}`"
          width="20"
          height="20"
          class="h-5 w-auto"
        >
      </a>
    </li>
  </ul>
</template>
