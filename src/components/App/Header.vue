<template>
  <header class="sticky top-0 border-b backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
      <h1 class="flex-1">
        <NuxtLink
          to="/"
          class="text-xl font-bold"
        >
          experiment-001
        </NuxtLink>
      </h1>
      <ul class="flex items-center justify-center gap-4">
        <li>
          <NuxtLink to="/">
            Link1
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            Link2
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            Link3
          </NuxtLink>
        </li>
      </ul>
      <div class="flex flex-1 items-center justify-end gap-2">
        <button aria-label="Switch to dark mode">
          <Icon
            name="uil:moon"
            size="1.5em"
          />
        </button>
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
