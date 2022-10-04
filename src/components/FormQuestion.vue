<template>
<section class="mainForm">
  <div id="questions">
    <h1>Welcome to the Form</h1>
    <h2 id="description">
      Answer the questions honestly,
      follow our advice and you will see a change in your attitude and lifestyle
    </h2><hr>
    <h2>How many hours do you sleep a day?</h2>

    <!-- method="get" action="/answers" -->

    <form id="form">
      <input type="radio" value="Less than 6" id="Lessthan6" name="pickedSleep" v-model="pickedSleep" />
      <label for="Lessthan6">Less than 6</label>
      <input type="radio" value="Between 6 and 8" id="Between6and8" name="pickedSleep" v-model="pickedSleep" />
      <label for="Between6and8">Between 6 and 8</label>
      <input type="radio" value="More than 8" id="Morethan8" name="pickedSleep" v-model="pickedSleep" />
      <label for="Morethan8">More than 8</label><hr>

      <h2>What is your level of satisfaction with your current job?</h2>

      <input type="radio" value="Dislike" id="Dislike" name="pickedJob" v-model="pickedJob" />
      <label for="Dislike">Dislike</label>
      <input type="radio" value="It's okay" id="It'sokay" name="pickedJob" v-model="pickedJob" />
      <label for="It'sokay">It's okay</label>
      <input type="radio" value="I like it" id="Ilikeit" name="pickedJob" v-model="pickedJob" />
      <label for="Ilikeit">I like it</label><hr>

      <h2>How many hours a week do you spend working or thinking about your job?</h2>

      <input type="radio" value="Less than 36 hours" id="Lessthan36" name="pickedJobTime" v-model="pickedJobTime" />
      <label for="Lessthan36">Less than 38 hours</label>
      <input type="radio" value="Between 36 and 48 hours" id="Between36and48" name="pickedJobTime" v-model="pickedJobTime" />
      <label for="Between36and48">Between 38 and 48 hours</label>
      <input type="radio" value="More than 48 hours" id="Morethan48" name="pickedJobTime" v-model="pickedJobTime" />
      <label for="Morethan48">More than 48 hours</label><hr>

      <h2>How much time do you dedicate to yourself during the day?</h2>

      <input type="radio" value="I'm never alone" id="I'mneveralone" name="pickedAlone" v-model="pickedAlone" />
      <label for="I'mneveralone">I'm never alone</label>
      <input type="radio" value="The time necessary for me" id="Thetimenecessary" name="pickedAlone" v-model="pickedAlone" />
      <label for="Thetimenecessary">The time necessary for me</label>
      <input type="radio" value="I spend a lot of time alone" id="Ispendalotof" name="pickedAlone" v-model="pickedAlone" />
      <label for="Ispendalotof">I spend a lot of time alone</label><hr>

      <h2>How much time a week do you spend on physical activity?</h2>

      <input type="radio" value="I dedicate myself to breathing" id="Idedicatemyself" name="pickedPhysical" v-model="pickedPhysical" />
      <label for="Idedicatemyself">I dedicate myself to breathing</label>
      <input type="radio" value="At least an hour for day" id="Atleastanhour" name="pickedPhysical" v-model="pickedPhysical" />
      <label for="Atleastanhour">At least an hour for day</label>
      <input type="radio" value="I do it all the time" id="Idoitallthetime" name="pickedPhysical" v-model="pickedPhysical" />
      <label for="Idoitallthetime">I do it all the time</label><hr>

      <h2>How much time do you use to strengthen your mind skills?</h2>

      <input type="radio" value="I think i know enough" id="Ithinkiknow" name="pickedSkills" v-model="pickedSkills" />
      <label for="Ithinkiknow">I think i know enough</label>
      <input type="radio" value="I focus on what I don't know" id="Ifocusonwhat" name="pickedSkills" v-model="pickedSkills" />
      <label for="Ifocusonwhat">I focus on what I don't know</label>
      <input type="radio" value="I always focus on improving them" id="Ialwaysfocus" name="pickedSkills" v-model="pickedSkills" />
      <label for="Ialwaysfocus">I always focus on improving them</label><hr>
    </form>

    <h2>Answers</h2>

    <div id="answers">
      <h3>1. 😴 {{ pickedSleep }}</h3>
      <h3>2. 💼 {{ pickedJob }}</h3>
      <h3>3. ⏰ {{ pickedJobTime }}</h3>
      <h3>4. 🧍‍♂️ {{ pickedAlone }}</h3>
      <h3>5. 💪 {{ pickedPhysical }}</h3>
      <h3>6. 🤓 {{ pickedSkills }}</h3>
    </div>

    <h2>If your answers are correct, press continue</h2>
    <input type="button" value="Continue" id="buttonContinue" v-on:click="answer()"/>
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
  },
  methods: {
    answer: function (event) {
      if (this.pickedSleep === 'Between 6 and 8') {
        if (this.pickedJob === 'I like it') {
          if (this.pickedJobTime === 'Less than 36 hours') {
            if (this.pickedAlone === 'The time necessary for me') {
              if (this.pickedPhysical === 'At least an hour for day') {
                if (this.pickedSkills === 'I always focus on improving them') {
                  window.location.assign('/correctAnswers')
                } else {
                  window.location.assign('/incorrectAnswers')
                }
              } else {
                window.location.assign('/incorrectAnswers')
              }
            } else {
              window.location.assign('/incorrectAnswers')
            }
          } else {
            window.location.assign('/incorrectAnswers')
          }
        } else {
          window.location.assign('/incorrectAnswers')
        }
      } else {
        window.location.assign('/incorrectSleep')
      }
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
  text-shadow: 0.2px 0.5px white;
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
