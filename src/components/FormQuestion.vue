<template>
<section class="mainForm">
  <div id="questions">
    <h1>Welcome to the Form</h1>
    <h2 id="description">
      Answer the questions honestly,
      follow our advice and you will see a change in your attitude and lifestyle
    </h2><hr>
    <h2>How many hours do you sleep a day?</h2>

    <input type="radio" value="Less than 6" v-model="pickedSleep" />
    <label for="one">Less than 6</label>
    <input type="radio" value="Between 6 and 8" v-model="pickedSleep" />
    <label for="two">Between 6 and 8</label>
    <input type="radio" value="More than 8" v-model="pickedSleep" />
    <label for="two">More than 8</label><hr>

    <h2>What is your level of satisfaction with your current job?</h2>

    <input type="radio" value="Dislike" v-model="pickedJob" />
    <label for="one">Dislike</label>
    <input type="radio" value="It's okay" v-model="pickedJob" />
    <label for="two">It's okay</label>
    <input type="radio" value="I like it" v-model="pickedJob" />
    <label for="two">I like it</label><hr>

    <h2>How many hours a week do you spend working or thinking about your job?</h2>

    <input type="radio" value="Less than 36 hours" v-model="pickedJobTime" />
    <label for="one">Less than 38 hours</label>
    <input type="radio" value="Between 36 and 48 hours" v-model="pickedJobTime" />
    <label for="two">Between 38 and 48 hours</label>
    <input type="radio" value="More than 48 hours" v-model="pickedJobTime" />
    <label for="two">More than 48 hours</label><hr>

    <h2>How much time do you dedicate to yourself during the day?</h2>

    <input type="radio" value="I'm never alone" v-model="pickedAlone" />
    <label for="one">I'm never alone</label>
    <input type="radio" value="The time necessary for me" v-model="pickedAlone" />
    <label for="two">The time necessary for me</label>
    <input type="radio" value="I spend a lot of time alone" v-model="pickedAlone" />
    <label for="two">I spend a lot of time alone</label><hr>

    <h2>How much time a week do you spend on physical activity?</h2>

    <input type="radio" value="I dedicate myself to breathing" v-model="pickedPhysical" />
    <label for="one">I dedicate myself to breathing</label>
    <input type="radio" value="At least an hour" v-model="pickedPhysical" />
    <label for="two">At least an hour</label>
    <input type="radio" value="I do it all the time" v-model="pickedPhysical" />
    <label for="two">I do it all the time</label><hr>

    <h2>How much time do you use to strengthen your skills?</h2>

    <input type="radio" value="I think i know enough" v-model="pickedSkills" />
    <label for="one">I think i know enough</label>
    <input type="radio" value="I focus on what I don't know" v-model="pickedSkills" />
    <label for="two">I focus on what I don't know</label>
    <input type="radio" value="I always focus on improving them" v-model="pickedSkills" />
    <label for="two">I always focus on improving them</label><hr>

    <h2>Answers</h2>

    <div id="answers">
      <h3>1. {{ pickedSleep }}</h3>
      <h3>2. {{ pickedJob }}</h3>
      <h3>3. {{ pickedJobTime }}</h3>
      <h3>4. {{ pickedAlone }}</h3>
      <h3>5. {{ pickedPhysical }}</h3>
      <h3>6. {{ pickedSkills }}</h3>
    </div>

    <h2>If your answers are correct, press continue</h2>
    <button>Continue</button>
  </div>
</section>
</template>

<script>
export default {
  name: 'formQuestion',
  data () {
    return {
      pickedSleep: String(' '),
      pickedJob: String(' '),
      pickedJobTime: String(' '),
      pickedAlone: String(' '),
      pickedPhysical: String(' '),
      pickedSkills: String(' ')
    }
  }
}
</script>

<style scoped>
.mainForm {
  background-image: url("@/assets/theme.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  width: 100%;
  height: 100%;
}
#questions{
  text-align: center;
  margin: 0 auto;
  width: 80%;
}
h1{
  font-size: 4rem;
  margin: 1rem 0 2rem 0;
  text-shadow: 1px 2px white;
}
#description{
  margin: 0 0 3rem 0;
}
hr {
  height: 0.1px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 5%;
  margin: 0 auto;
}

h2{
  margin: 1rem;
  font-size: 1.5rem;
}
h3{
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
}
input, label{
  margin: 1.5rem 0.5rem 1.5rem 0.5rem;
  font: strong;
  text-shadow: 0.5px 0.5px white;
}
#answers{
  display: grid;
  justify-content: left;
  padding: 1rem;
  border-radius: 15px;
  grid-template-columns: 50% 50%;
  background-color: rgba(255, 255, 255, 0.477);
  border: solid white;
}
button:hover {
  background-color: #ffffff;
  color: black;
}
button:active {
  background-color: #ffffff;
  box-shadow: 1px 2px rgb(255, 140, 51);
  transform: translateY(4px) translateX(2px);
}
button {
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
