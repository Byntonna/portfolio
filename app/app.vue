<template>
  <main>
    <div class="navigator">
      <NuxtLayout />
    </div>
    <div class="page-content">
      <NuxtPage />
    </div>
  </main>
</template>

<style scoped>
.page-content {
  margin-inline: auto;
  margin-top: 4rem;
  text-align: left;
  max-width: 70ch;
  position: relative;
}
.navigator {
  position: absolute;
  right: clamp(4rem, 8vw, 7rem);
  top: 0;
}

@media (max-width: 700px) {
  main {
    display: flex;
    flex-direction: column;
  }

  .page-content {
    order: 1;
    width: 100%;
    padding-inline: 1.25rem;
  }

  .navigator {
    order: 2;
    position: static;
    margin-top: 3rem;
  }
}

@media (min-width: 701px) and (max-width: 1300px) {
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 2rem;
    max-width: 1100px;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }

  .page-content {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    min-width: 0;
  }

  .navigator {
    grid-column: 2;
    grid-row: 1;
    position: static;
  }
}
</style>
