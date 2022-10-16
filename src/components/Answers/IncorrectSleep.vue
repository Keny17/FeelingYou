<template>
<div id="home">
  <h1>Incorrect Sleep</h1>
  <p>Hello sleepyhead, if you find yourself in this page,
    it's time to make the first change in your life, and this is...
    Control your sleep time, any excess is bad,
    both sleeping more than necessary and sleeping too little time
  </p><br>
  <p>If you want to know a little more you can click on the following links
    and learn why you should learn to control your excess sleep
    and the consequences of not doing it
  </p><hr>
  <div id="moreInfo">
    <a id="links" href="https://health.gov/espanol/myhealthfinder/viviendo-sanamente/salud-mental-relaciones-otras-personas/duerme-lo-suficiente#:~:text=La%20mayor%C3%ADa%20de%20los%20adultos,total%20de%20horas%20de%20sue%C3%B1o.">Sleep Enough</a>
    <a id="links" href="https://www.lavanguardia.com/vivo/lifestyle/20200121/472886689248/dormir-exceso-riesgo-salud.html">Be careful not to sleep too much</a>
  </div><hr>
  <h2>
    After you manage to adapt to this point and achieve the ideal dream,
    come back and fill out the form again to find out about your new challenge.
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
