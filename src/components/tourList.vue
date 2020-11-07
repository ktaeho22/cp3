<template>
<div class="wrapper">
  <div class="schedules">
    <div class="schedule" v-for="schedule in schedules" :key="schedule.id">
    <div class="box">
      <div class="date">
      <img class = "calandar" src="../../images/calandar.png"/>
      <p class = "date-detail">  {{schedule.month}} {{schedule.date}}, {{schedule.time}}</p>
      </div>
      <div class="detail">
        <p>Location: {{schedule.city}}, {{schedule.state}}</p>
        <p>Free Event</p>
        <p>Please wear a mask and have a social distance.</p>
      </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default{
name: 'tourList',

props: {
schedules: Array
}
}
</script>

<style>
.wrapper{

}
.box{
border-style: double;
display:flex;
flex-direction: row;
margin-bottom: 1%;

justify-content: space-around;
align-items: center;

}
.detail{
display: flex;
flex-direction: column;
font-size: 150%;



}

</style>
