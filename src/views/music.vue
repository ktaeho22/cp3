<template>
<div>
<div class = "music-contents">
  <div class = "music-content1">
    <div class = 'music-photo1-container'><img class = "about-photo1" src="../../images/music1.jpg"/>
      <div class = "music-photo1-cc"> CC Image courtesy of gerardj2 on Flickr</div>
    </div>
    <div class = "music-paragraph1">
      <div class = "m1-content">
        Fer Jane is working on recording. Recorded music will be released soon.
        You can search the music on Youtube.
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
.music-contents{

  font-family: "Garamond";
  display: flex;
  flex-direction: column;
}

.music-content1 {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.music-paragraph1 {
  padding-top: 10%;
}

.m1-title {
  font-family: "Garamond";
  font-size: 200%;
  padding-bottom: 5%;
}

.music-photo1-container {
  padding-right: 5%;
}

.music-photo1-cc {
  font-size: 30%;
}
@media only screen and (min-width: 0px) and (max-width: 960px) {

.music-content1 {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}


  .m1-content{
    font-size: 150%;
    width:100%;
  }


}


/*tablet to low resolution interface*/
@media only screen and (min-width: 961px) and (max-width: 1820px) {



.music-content1 {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}


  .m1-content{
    font-size: 150%;
    width:100%;
  }






}
</style>
