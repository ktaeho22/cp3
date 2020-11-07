<template>


<div>
  <h1 class = title>Upcoming Tour Schedules</h1>
  <tourList :schedules="schedules" />
  <div class= 'footer'>
    <div class = 'copyright'>2020 Fer Jane</div>
    <div class = 'github'><a href="https://github.com/ktaeho22/cp3.git"><img src="../../images/githubmark.png"/></a></div>
  </div>
</div>


</template>


<script>
import tourList from "../components/tourList.vue"
export default {
  name: 'Tour',
  components: {
    tourList
  },
  data() {
    return {
    }
  },
  computed: {
    schedules() {
      return this.$root.$data.schedules;
    }
  },
}
</script>

<style>

</style>
