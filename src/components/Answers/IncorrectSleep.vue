<template>
    <div id="home">
      <p>pues No: {{URLPage}}</p>
      <button v-on:click="answer()">sip</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'formAnswers',
    data () {
      return {
        URLPage: window.location
      }
    },
    methods: {
      answer: function (event) {
        this.URLPage = 'sip'
      }
    }
  }
  </script>
  
  <style scoped>
  #home{
    background-image: url("@/assets/theme.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    text-align: left;
  }
  </style>