<template>
  <div class="about">
    <h1>¡Welcome!</h1>
    <p>
      This website is designed for you, who want to learn healthier habits,
      for you who want to feel young all your life...<br><br>
      We hope that these tips will be useful for you to reduce your stress,
      learn to manage your time and control your feelings,
      to become aware of your lifestyle but mainly to learn that you are
      the one who is in control of your life.<br>
    </p>
    <h2>
      Always Remember...<br>
      Better Attitude, Better Health
    </h2>
  </div>
</template>

<style scoped>
.about{
  display: grid;
  background-image:url("@/assets/theme.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  place-content: center;
  position: absolute;
}
h1{
  color:black;
  text-align:center;
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
  padding: 1rem;
  text-shadow: 1px 2px white;
}
h2{
  font-size: 1.5rem;
  Color:black;
  text-align:center;
  padding: 1rem 1rem 1rem 1rem;
  text-shadow: 1px 2px white;
}
p{
  color:black;
  background-color: white;
  width: 65%;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
}
</style>
