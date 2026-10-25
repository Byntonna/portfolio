<template>
  <div class="sidebar">
    <h1>Контакты</h1>
    <a href="mailto:lovefrom@rambler.ru">lovefrom@rambler.ru</a>
    <a href="https://github.com/Byntonna">GitHub</a>
    <a href="https://telegram.me/unerhort">Telegram</a>
    <p class="remark">100% organic code.</p>
    <slot />
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border-left: 1px solid var(--main-black);
  padding: 4rem 0 0 1rem;
}
.remark {
  margin-top: auto;
  margin-bottom: 1em;
  color: #494949;
}

@media (max-width: 700px) {
  .sidebar {
    height: auto;
    border-left: none;
    border-top: 1px solid var(--main-black);
    padding: 1.5rem 1.25rem;
  }

  .remark {
    margin-top: 1rem;
  }
}
</style>