<template>
<div>
  <h1>Ask any questions:</h1>
  <form v-if="creating" @submit.prevent="addTicket">
    <textarea v-model="question"></textarea>
    <br />
    <button type="submit">Ask</button>
  </form>
<br />
<br />
  <div v-for="ticket in tickets" v-bind:key="ticket.id">
    <hr>
    <div class="ticket">
      <div class="question">
        <p id = "q">{{ticket.question}}</p>
        <p id = "a">{{ticket.answer}}</p>
      </div>
    </div>
  </div>

  <div class= 'footer'>
    <div class = 'copyright'>2020 Fer Jane</div>
    <div class = 'github'><a href="https://github.com/ktaeho22/cp3.git"><img src="../../images/githubmark.png"/></a></div>
  </div>

</div>


</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      name: '',
      question: '',
    }
  },
  methods: {
    addTicket() {
      this.$root.$data.addTicket(this.question);
      this.name = "";
      this.question = "";
      this.creating = false;
      this.creating = !this.creating;
    },
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  },
}
</script>

<style scoped>
#q{
color:purple;
}
#a{
color:yellow;
}
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
