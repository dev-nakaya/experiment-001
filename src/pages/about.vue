<script lang="ts" setup>
import { skills } from '~/assets/json/master.json'
</script>

<template>
  <div class="mx-auto max-w-5xl px-16 py-12">
    <UtilPageTitle>
      About
    </UtilPageTitle>
    <section class="border-b pb-16">
      <img
        src="~/assets/image/dev.nakaya.png"
        width="80"
        height="80"
        alt="dev.nakaya image"
        class="size-20 rounded-full"
      >
      <dl class="my-4">
        <dt class="mb-4 text-3xl font-bold">
          dev.nakaya
        </dt>
        <dd>
          <p class="mb-4">
            Web開発エンジニア(ひよっこ)。Nuxtでフロントエンド開発をするのが好きです。<br>
            このサイトは、他サービスで情報発信する前のメモレベルのような情報の置き場になる予定です。
          </p>
        </dd>
        <dd>
          <SocialLink />
        </dd>
      </dl>
    </section>
    <section class="py-16">
      <h1 class="mb-8 text-3xl font-bold">
        stack
      </h1>
      <ul class="flex flex-wrap">
        <li
          v-for="skill in skills"
          :key="skill.id"
          class="w-1/2"
        >
          <dl class="m-2 rounded border p-4">
            <dt class="mb-4 text-xl font-bold">
              {{ skill.name }}
            </dt>
            <dd>
              {{ skill.content }}
            </dd>
          </dl>
        </li>
      </ul>
    </section>
  </div>
</template>
