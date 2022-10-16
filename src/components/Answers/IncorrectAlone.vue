<template>
<div id="home">
  <h1>Time Alone</h1>
  <p>Disparaging the time you spend with yourself is one of our main mistakes,
    both because of the fear of feeling alone and because of the fact that our
    way of being leads us to avoid other people.
  </p><br>
  <p>Spending quality time doing something that makes you feel good,
    or simply taking a break from worry by reading a book
    or taking a moment to think about something different, can improve your lifestyle.
  </p><hr>
  <div id="moreInfo">
    <a id="links" href="https://www.infobae.com/america/the-new-york-times/2019/10/31/por-que-deberias-dedicar-tiempo-a-estar-a-solas-contigo-mismo/">Take Time</a>
    <a id="links" href="https://salud.nih.gov/articulo/cuidado-y-conexion/">Long Time Alone</a>
  </div><hr>
  <h2>
    After you manage to adapt to this point and manage to feel comfortable alone,
    come back and fill out the form again to meet your new challenge.
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
