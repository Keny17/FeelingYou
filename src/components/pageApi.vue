<template>
<div id="mainApi">
  <h1>On this secret page you will receive advice
    or simply some phrases random</h1>
  <img id="responseBox" src="@/assets/cloud.png" alt="cloud" />
  <p>{{response}}</p>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      response: null
    }
  },
  mounted () {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(responseApi => (this.response = responseApi.data.slip.advice))
  }
}
</script>

<style scoped>
#mainApi{
  background-image: url("@/assets/theme.jpg");
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  text-align: center;
  width: 100%;
  height: 100vh;
}
#responseBox{
  width: 60%;
  height: 60%;
  margin: 0 auto;
  overflow:hidden;
}
#responseBox:hover {
  -webkit-transform:scale(1.5);
  transform:scale(1.5);
}
p{
  margin: 13rem 0 0 18rem;
  position: absolute;
  text-shadow: 1px 2px white;
  font-size: 1.5rem;
  width: 50%;
}
h1{
  position: relative;
  text-shadow: 1px 2px white;
  margin: 0 0 2rem 0;
}

</style>
