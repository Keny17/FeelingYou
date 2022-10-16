<template>
<div id="home">
  <h1>Train your Mind</h1>
  <p>Possibly we have reached one of the most complicated challenges,
    it is difficult to assimilate that your brain with all the tasks
    it performs daily needs a little more to stay in shape,
    this could be considered an additional effort,
    however it will be a pleasure to learn something new
  </p><br>
  <p>It is worth reminding you that your brain controls your body,
    and you know what the best?, you can learn to control it,
    and obtain an ideal lifestyle, of course I think so, what do you think?
  </p><hr>
  <div id="moreInfo">
    <a id="links" href="https://www.mgc.es/blog/los-beneficios-de-ejercitar-el-cerebro/">Mental Health</a>
    <a id="links" href="https://recluit.com/como-mejorar-tus-habilidades-personales/#.Yzvew3bMKDI">Improve Yourself</a>
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
