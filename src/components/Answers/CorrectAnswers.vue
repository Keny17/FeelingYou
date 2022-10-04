<template>
  <div id="home">
    <h1>Congratulations!</h1>
    <p>From our point of view, your lifestyle is ideal,
      you properly control your sleep hours,
      use adequate time at work and also enjoy what you do,
      take advantage of part of your free time to be alone,
      in addition, you keep your shape physical and enhances their mental abilities</p>
    <img src="@/assets/applause.gif" alt="applause" />
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
#home{
  display: grid;
  grid-column: 90%;
  background-image: url("@/assets/theme.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
}
h1{
  color:black;
  text-align: center;
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  padding: 1rem;
  text-shadow: 1px 2px white;
}
p{
  font-size: 1.5rem;
  Color:#000000;
  text-align: center;
  padding: 1rem 1rem 1rem 1rem;
  margin: 0 0 2rem 0;
  text-shadow: 1px 2px white;
}
img{
  margin: 0 auto;
  border: none;
  border-radius: 15px;
}
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
  width: 20%;
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
