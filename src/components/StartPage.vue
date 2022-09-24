<template>
<div class="startPage">
  <h1>Are you ready?</h1>
  <button v-on:click="start()">START</button>
</div>
</template>

<script>
export default {
  el: '#start-Page',
  methods: {
    start: function () {
      window.location.assign('/questions')
    }
  },
  name: 'startPage'
}
</script>

<style scoped>
.startPage {
  background-image: url("@/assets/theme.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
}
h1{
  color:black;
  text-align: center;
  margin: 0 0 1,5rem 0;
  padding: 1rem;
  font-size: 4rem;
  text-shadow: 1px 2px white;
}
button {
  font-family: cursive;
  display: inline-block;
  padding: 3rem 3.5rem;
  margin: 4.1rem 0 9rem 0;
  font-size: 2.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 15px;
  box-shadow: 5px 7px rgb(53, 205, 255);
}
button:hover {
  background-color: #ffffff;
  color: black;
}
button:active {
  background-color: #ffffff;
  box-shadow: 1px 2px rgb(53, 205, 255);
  transform: translateY(4px) translateX(2px);
}
</style>
