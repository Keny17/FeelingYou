<template>
<div id="home">
  <h1>Wrong Job</h1>
  <p>Really?, you need to start adjusting your times,
    it is not physically or mentally healthy at all,
    dedicating so much time to your work, you must change
    this bad habit remember that even if you love what
    you do there are other parts of your life that would love have more time with you
  </p><br>
  <p>It will not be easy to accommodate your time so that you start
    spending quality time in other situations of your life,
    but for this reason it is your new challenge and you are not going to lose it.
  </p><hr>
  <div id="moreInfo">
    <a id="links" href="https://www.infobae.com/tendencias/2021/09/03/cuantas-horas-es-ideal-trabajar-para-ser-productivo-y-equilibrar-la-vida-laboral-y-personal/">You Work Too Much</a>
    <a id="links" href="https://www.dedalomexico.com/post/la-importancia-de-pasar-tiempo-con-la-familia">Take a Rest</a>
  </div><hr>
  <h2>
    Now that you know there are things beyond your desk,
    go back and fill out the form again to face your new challenge.
  </h2>
  <ReturnButton/>
</div>
</template>

<script>
import ReturnButton from '@/components/ReturnButton.vue'

export default {
  name: 'incorrectSleep',
  components: {
    ReturnButton
  }
}
</script>

<style scoped>
@import '@/assets/StyleAnswers.css';
</style>
