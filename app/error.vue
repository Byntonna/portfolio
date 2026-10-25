<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: () => props.error.status === 404 ? "Страница не найдена — Александр Грудин"
      : "Произошла ошибка — Александр Грудин",
  robots: "noindex, nofollow"
})
</script>

<template>
  <main>
    <h1>
      {{ props.error.status === 404 ? "Страница не найдена" : "Произошла ошибка" }}
    </h1>
    <NuxtLink to="/">
      <button>
        Вернуться на главную
      </button>
    </NuxtLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>