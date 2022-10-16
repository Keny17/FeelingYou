<template>
<div class="app">
  <nav>
    <img id="mainIcon" src="@/assets/Icon.png" alt="Logo" v-on:click="pageApi()"/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/start">Start</router-link>
  </nav>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</div>
</template>
<script>
export default ({
  methods: {
    pageApi: function () {
      window.location.assign('/pageApi')
    }
  }
})
</script>

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
#mainIcon{
  width: 1.5rem;
  height: 1.5rem;
  float: left;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
