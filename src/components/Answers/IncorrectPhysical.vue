<template>
<div id="home">
  <h1>Sedentary Life</h1>
  <p>I do not want to judge that you do not like to do any type of physical activity,
    on the contrary I prefer to think that
    you use that time in other important activities, however,
    get up and move a little it will only take a few minutes a day
  </p><br>
  <p>It is not to brag but soon you will realize the benefits
    that a little physical activity brings to your
    state of mind and the energies that you emit on a daily basis.
  </p><hr>
  <div id="moreInfo">
    <a id="links" href="https://medlineplus.gov/spanish/healthrisksofaninactivelifestyle.html">Stand up and Walk</a>
    <a id="links" href="https://circulosdelavida.es/actividad-fisica-diaria/">A Little Each Day</a>
  </div><hr>
  <h2>
    Now that you have energy to spare and burned a few daily calories,
    come back and fill out the form again to face your new challenge.
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
