<template>
  <section class="about">
    <h2 class="h2-title">Info !</h2>
    <p class="parag-1">
      <b>COVID-19 |</b> Our routine changed, but we kept our momentum.
    </p>
    <p class="parag-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
  </section>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
  .about{
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
      background-image: linear-gradient(45deg, #d4b578, #faedce);
      font-family: 'Muli', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      min-height: 50vh;
      margin: 0;
      padding:0 10px;
      
      p{
        font-size:1.6vw;
        color: rgb(0, 0, 0);
        font-family: cursive;
      }
      .parag-2{
        padding-bottom: 8rem;
        font-family: 'Satisfy', cursive;
      }
  }
</style>
