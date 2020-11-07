import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false
let data = {
  schedules: mock,
  currentID: 2,
  tickets: [{
    id: 1,
    question: 'How can I ask a question?',
    answer: 'Write things that you are curious about, and Fer Jane will answer you.'

  }],
  getTickets() {
    return this.tickets;
  },
  addTicket(question) {
    this.tickets.push({
      id: this.currentID,
      question: question,
      answer: '',
    });
    this.currentID += 1;
  }
}
new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
