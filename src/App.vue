<template>
<div class="app">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/start">Start</router-link>
  </nav>
  <router-view/>
</div>
</template>

<style scoped>
*{
  font-family: cursive;
  margin: 0;
}
nav{
  font-size: 1rem;
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  text-align: right;
  color:white;
  background-color: black;
}
a:hover{
  color:rgb(53, 205, 255);
}
a{
  text-align:center;
  text-decoration: none ;
  align-content: right;
  color:white;
}
</style>
