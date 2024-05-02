<template>
  <div>
    <AppHeader />
    <main class="min-h-[calc(100vh-4rem-4rem)]">
      <article class="mx-auto max-w-5xl px-4 py-12">
        <slot />
      </article>
    </main>
    <AppFooter />
  </div>
</template>
