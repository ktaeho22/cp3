<template>
  <div class="home">
  <div class = "index-contents">
    <div class = "index-content1">
      <div class = index-photo1-container>
        <img class = "pindex index-photo1" src="../../images/index1.jpg"/>
        <p class = "cc">CC Image courtesy of K Snaps on Flickr</p>


      </div>
    </div>


    <div class = "index-content2">
    <div class = 'bio-image'><a href="/bio"><img class = "pindex" src ="../../images/index3.jpg"/></a></div>
    <div class = 'music-image'><a href="/music"><img class = "pindex" src ="../../images/index2.jpg"/></a></div>
    <div class = 'tour-image'><a href="/tour"><img class = "pindex" src ="../../images/index4.jpg"/></a></div>
    </div>



  </div>

  <div class= 'footer'>
    <div class = 'copyright'>2020 Fer Jane</div>
    <div class = 'github'><a href="https://github.com/ktaeho22/cp3.git"><img src="../../images/githubmark.png"/></a></div>
  </div>



  </div>
</template>

<script>

</script>

<style>
.footer {
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column-reverse;
}

.copyright {

  font-family: "Garamond";
}

.github {
  padding-bottom: 1%;
  font-family: "Garamond";

}

.cc {
  font-size:30%;
}

.pindex{
  width:100%;
  height: auto;
}

.index-contents{
  display: flex;
  flex-direction: column;

  font-family: "Garamond";

}



.index-content2{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media only screen and (min-width: 0px) and (max-width: 960px) {
  .index-content2{
    flex-direction: column;
  }
  .about-content1{
    flex-direction: column;
  }
  .index-photo1-container{
    padding-bottom: 10%;
    padding-top: 0%;

  }
  .i2-title{
    font-size: 400%;
    padding-bottom: 10%;
  }
  .i2-content{
    font-size: 150%;
    width:100%;
  }
  .index-photo1{
    width: 100%;
  }
  .index-paragraph2 {
      padding-top: 0%;
  }

  .about-photo1 {
    width:100%;
  }


  .portfolio-photos{
    width:100%;
    height:auto;
  }




 .index-contents{
    padding-right: 11%;
  }

  .m1-content{
    font-size: 150%;
    width:100%;
  }


}


/*tablet to low resolution interface*/
@media only screen and (min-width: 961px) and (max-width: 1820px) {






  .index-content2{
    flex-direction: column;
  }

  .index-photo1-container{
    padding-bottom: 10%;
    padding-top: 0%;

  }





  .index-photo1{
    width: 100%;
  }
  .index-paragraph2 {
      padding-top: 0%;
  }






}


</style>
