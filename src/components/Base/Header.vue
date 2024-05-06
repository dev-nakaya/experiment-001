<template>
  <header class="sticky top-0 z-20 border-b backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-16">
      <h1 class="flex-1">
        <NuxtLink
          to="/"
          class="text-xl font-bold"
        >
          dev.nakaya
        </NuxtLink>
      </h1>
      <div class="flex flex-1 items-center justify-end gap-4">
        <!-- <button aria-label="Switch to dark mode">
          <Icon
            name="uil:moon"
            size="1.5em"
          />
        </button> -->
        <NuxtLink
          to="/about"
          aria-label="About me"
        >
          <Icon
            name="mdi:account-circle-outline"
            size="1.5em"
          />
        </NuxtLink>
        <a
          href="https://github.com/dev-nakaya/experiment-001/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="View on GitHub"
        >
          <Icon
            name="uil:github"
            size="1.5em"
          />
        </a>
      </div>
    </div>
  </header>
</template>
