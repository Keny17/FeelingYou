<template>
<div id="home">
  <h1>Wrong Job</h1>
  <p>Your decisions mark your life, you must learn to take paths,
    travel them and make them pleasant for you,
    think that your work is a large part of your life,
    and a large part of your life will be dedicated to working
  </p><br>
  <p>People who do what they have always wanted are happier
    and strive to give a good result, if you only think about
    surviving and doing what is necessary, you must rethinkyour current comfort zone
  </p><hr>
  <div id="moreInfo">
    <a id="links" href="https://www.psicologia-online.com/no-me-gusta-mi-trabajo-que-hago-5304.html">Current Job</a>
    <a id="links" href="https://www.michaelpage.es/advice/candidatos/avanza-en-tu-carrera/%C2%BFvas-cambiar-de-trabajo-te-damos-5-consejos-para-una">Make a Change</a>
  </div><hr>
  <h2>
    After you love what you do,
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
