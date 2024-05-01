<script lang="ts" setup>
const count = ref(0)
</script>

<template>
  <div class="m-4 rounded bg-slate-100 p-4">
    <p class="mx-2">
      AppCount:
      <span class="font-bold">
        {{ count }}
      </span>
    </p>
    <button
      class="m-2 rounded bg-green-600 px-4 py-2 text-white"
      @click="count++"
    >
      +
    </button>
    <button
      class="m-2 rounded bg-slate-400 px-4 py-2"
      @click="count--"
    >
      -
    </button>
  </div>
</template>
