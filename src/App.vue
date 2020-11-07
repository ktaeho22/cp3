<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <p id = "title">Fer Jane</p>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/bio">
        <div class="menu-item browse">
          <p>Bio</p>
        </div>
      </router-link>
      <router-link to="/music">
        <div class="menu-item browse">
          <p>Music</p>
        </div>
      </router-link>
      <router-link to="/tour">
        <div class= "menu-item browse">
        <p>Tour</p>
        </div>
      </router-link>
      <router-link to="/questions">
        <div class= "menu-item browse">
        <p>Questions</p>
        </div>
      </router-link>


    </div>
  </div>
  <router-view />
</div>
</template>



<style>
* {
  color: white;
  background-color: black;
  box-sizing: border-box;
  text-decoration:none;
}

#brand {
font-family: "Segoe Script";
}

#side{
font-family: "Tahoma";
}

body {
  margin: 50px 100px;

}

#title{
font-size:200%;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  justify-content: space-between;
}



#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}


#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}


.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;

}

@media only screen and (min-width: 0px) and (max-width: 960px) {
#menu {
  display: flex;
  width:100%;
  justify-content: space-between;
}



}


/*tablet to low resolution interface*/
@media only screen and (min-width: 961px) and (max-width: 1820px) {
#menu {
  display: flex;
  width:100%;
  justify-content: space-between;
}




}
</style>
