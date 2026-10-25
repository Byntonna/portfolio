<script setup>
const card1_content = { title: 'Menura', description: 'B2B сервис для составления ресторанного меню онлайн и с ' +
      'отображением на телевизоре. Спроектировал архитектуру и развернул сервис, сейчас его развивает другой разработчик. ' +
      'Проект приносит прибыль.', image: 'cards/menura.webp', projectLink: 'https://menura.ru' }
const card2_content = { title: 'АВАЛОН', description: 'Лендинг и блог для питерской коллегии адвокатов. ' +
      'Перенёс сайт с WordPress на собственное решение на Nuxt.', image: 'cards/avalon.webp',
      projectLink: 'https://avaloncollegium.com/', buttonLink: '/avalon'}
const card3_content = { title: 'Montera', description: 'Кроссплатформенное приложение для учёта личных финансов: доходы ' +
      'и расходы, цели, история и аналитика с прогнозом. Windows, macOS и Linux, Avalonia UI и .NET (C#).',
      image: 'cards/montera.webp' }
const card4_content = { title: 'Gate to East Tours', description: 'Сайт с экскурсиями по Китаю с возможностью оставить заявку на ' +
      'заинтересовавшуюся экскурсию. Сайт приостановлен до завершения регистрации владельца как оператора ' +
      'персональных данных.', image: 'cards/gate.webp' }

// const items = ref({card1_content, card2_content, card3_content, card4_content})
</script>

<template>
  <div class="sections">
    <section>
      <h1>Обо мне</h1>
      <p>Меня зовут Александр Грудин, я студент-первокурсник ОмГТУ, учусь на программной инженерии. Беру небольшие
        проекты для реальных заказчиков и довожу их до рабочего продукта. Больше всего мне интересны деплой
        и инфраструктура. Сейчас в рамках проектной деятельности в вузе разрабатываю игру на Godot.</p>
    </section>
    <section>
      <h1>Проекты</h1>
      <div class="cards">
        <card :title="card1_content.title" :description="card1_content.description" :image="card1_content.image"
          :projectLink="card1_content.projectLink"/>
        <card :title="card2_content.title" :description="card2_content.description" :image="card2_content.image"
          :projectLink="card2_content.projectLink" :is-button-show="true" :buttonLink="card2_content.buttonLink"/>
        <card :title="card3_content.title" :description="card3_content.description" :image="card3_content.image" />
        <card :title="card4_content.title" :description="card4_content.description" :image="card4_content.image" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}

.sections > *:not(:last-child) {
  margin-bottom: 1rem;
}

@media (max-width: 601px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>