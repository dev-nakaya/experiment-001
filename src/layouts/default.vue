<template>
  <div class="text-slate-800">
    <BaseHeader />
    <main class="min-h-[calc(100vh-4rem-4rem)]">
      <div class="mx-auto max-w-5xl px-4 py-12">
        <slot />
      </div>
    </main>
    <BaseFooter />
  </div>
</template>
