<template>
  <div id="home">
    <h1>Congratulations!</h1>
    <p>From our point of view, your lifestyle is ideal,
      you properly control your sleep hours,
      use adequate time at work and also enjoy what you do,
      take advantage of part of your free time to be alone,
      in addition, you keep your shape physical and enhances their mental abilities</p>
    <img id="picture" src="@/assets/applause.gif" alt="applause" />
    <ReturnButton/>
  </div>
</template>

<script>
import ReturnButton from '@/components/ReturnButton.vue'

export default {
  name: 'formAnswers',
  components: {
    ReturnButton
  }
}
</script>

<style scoped>
@import '@/assets/StyleAnswers.css';
</style>
