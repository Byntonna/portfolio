<script setup lang="ts">
defineProps ({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  isButtonShow: {
    type: Boolean,
    default: false
  },
  projectLink: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <article class="card">
    <img :src="image" alt="Скриншот сайта" />

    <div class="content">
      <div>
        <header>
          <a class="cardTitle" v-if="projectLink != ''" :href="projectLink">{{ title }}</a>
          <h2 v-else>{{ title }}</h2>
        </header>

        <p>
          {{ description }}
        </p>
      </div>
      <NuxtLink v-if="isButtonShow && buttonLink"
                :to="buttonLink"
                class="nuxtLink">
        <button>
          Как я его создавал
        </button>
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>

.card {
  min-height: 10.5rem;
  height: 100%;
  border: 1px solid var(--main-black);
  border-radius: var(--border-radius-default);
  display: flex;
  flex-direction: column;
}

.content {
  padding: 0.6rem 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nuxtLink {
  margin-top: auto;
  align-self: flex-start;
  color: white;
  text-decoration: none;
}

img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-bottom: 1px solid var(--main-black);
  border-radius: var(--border-radius-default) var(--border-radius-default) 0 0;
}

p {
  font-size: var(--text-small);
  margin-top: 0.4rem;
}
</style>