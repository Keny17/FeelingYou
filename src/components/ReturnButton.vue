<template>
<button id="buttonReturn" v-on:click="answer()">Return</button>
</template>

<script>
export default {
  name: 'returnButton',
  methods: {
    answer: function (event) {
      window.location.assign('/questions')
    }
  }
}
</script>

<style scoped>
#buttonContinue:hover {
  background-color: #ffffff;
  color: black;
}
#buttonContinue:active {
  background-color: #ffffff;
  box-shadow: 1px 2px rgb(255, 140, 51);
  transform: translateY(4px) translateX(2px);
}
#buttonContinue {
  font-family: cursive;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 1rem 0 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 15px;
  box-shadow: 2px 5px rgb(255, 140, 51);
}
</style>
