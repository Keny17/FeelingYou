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
#buttonReturn:hover {
  background-color: #ffffff;
  color: black;
}
#buttonReturn:active {
  background-color: #ffffff;
  box-shadow: 1px 2px rgb(255, 140, 51);
  transform: translateY(4px) translateX(2px);
}
#buttonReturn {
  font-family: cursive;
  width: 20%;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0 auto;
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
