<template>
  <div class="wrapper_main grid">
    <div class="sidebar">
      <div class="top_items">
        <span>Online School</span>
        <router-link to="/mycourses"><i class="fas fa-film pad"></i>Мое обучение</router-link>
        <router-link to="/courses"><i class="far fa-envelope pad"></i>Программы обучения</router-link>
      </div>
      <div class="bottom_items">
        <router-link to="/"><i class="fas fa-directions pad"></i>Главная</router-link>
        <router-link to="/user"><i class="fas fa-user pad"></i>Личный кабинет</router-link>
      </div>
    </div>
    <div class="header">
      <div class="wrapper_auth" >
          <router-link to="/signin">Авторизация</router-link>
          <router-link to="/signup">Регистрация</router-link>
      </div>
      <div class="wrapper_auth" v-if="1 == 0">
        <i class="fas fa-sign-out-alt exit"></i>
      </div>
    </div>
    <router-view class="content_main"/>
  </div>
</template>

<style lang="scss">
$color: #7fc7a8;
#app {
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size:1rem;
  color: #2c3e50;

}
.grid{
  display:grid;
  height:100vh;
  width: 100vw;
}
.wrapper_main{
  grid-template-rows: 1fr 12fr;
  grid-template-columns: 1fr 6fr;
  grid-template-areas: 
    "sidebar header"
    "sidebar content";
  grid-gap: 1.5rem;
}
.content_main{
  background-color: white;
  grid-area:content;
  margin-right: 1.5rem;
}
.header{
  grid-area: header;
}
.pad{
  margin: 0 .5rem;
}
.sidebar {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: sidebar;
  background-color: white;
  padding: 2em;
  .top_items{
    display:flex;
    flex-direction: column;
  }
  span{
    margin: 1rem 0;
    font-size:2rem;
  }
}
a{
    margin: 1rem 0;
    text-decoration: none;
    font-weight: bold;
    color: #b6b6b6;
    &.router-link-exact-active {
      color: $color;
    }
}
*, a:focus {

    outline: none !important;

}
.exit{
  font-size:1.45rem;
}
.exit:hover{
  cursor: pointer;
}
.wrapper_auth{
  margin: 1rem 2rem;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  a{
    margin-right:2rem;
  }
}
.bottom_items{
  display:flex;
  flex-direction: column;
}
</style>
