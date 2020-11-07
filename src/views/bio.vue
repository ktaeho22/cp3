<template>
<div>
<div class = "about-contents">
  <div class = "about-content1">
    <div class = 'about-photo1-container'>
    <img class = "about-photo1" src="../../images/bio1.jpg"/>
      <div class = "about-photo1-cc"> CC Image courtesy of gerardj2 on Flickr</div>
    </div>
    <div class = "about-paragraph1">
      <div class = "a1-title">Bio</div>
      <div class = "a1-content">
        Fer Jane is an one man band found by John Doe from Provo, Utah. Since April 2020, John decided to follow his passion.
        The year 2020 is a mess and to make the world a little better, he decided to do it by sharing his musical talents.
        Since then, he traveled around Utah wherever the venue is on a street or in a bar, he started to sing.

      </div>
    </div>
  </div>
</div>


<div class= 'footer'>
  <div class = 'copyright'>2020 Fer Jane</div>
  <div class = 'github'><a href="https://github.com/ktaeho22/cp3.git"><img src="../../images/githubmark.png"/></a></div>
</div>

</div>
</template>

<style>
.about-contents{

  padding-right: 7%;
  font-family: "Garamond";
}

.about-content1 {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.about-paragraph1 {
  padding-top: 10%;
}

.a1-title {
  font-family: "Garamond";
  font-size: 200%;
  padding-bottom: 5%;
}

.about-photo1-container {
  padding-right: 5%;
}

.about-photo1-cc {
  font-size: 30%;
}

@media only screen and (min-width: 0px) and (max-width: 960px) {

  .about-content1{
    flex-direction: column;
  }



  .about-photo1 {
    width:100%;
  }





}


/*tablet to low resolution interface*/
@media only screen and (min-width: 961px) and (max-width: 1820px) {


.about-content1{
  flex-direction: column;
}







  .a1-title{
    font-size: 400%;
    padding-bottom: 10%;
  }
  .a1-content{
    font-size: 150%;
    width:100%;
  }
  .about-photo1 {
    width:100%;
  }





}
</style>
