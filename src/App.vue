<template>
  <div class="wrapper_main grid">
    <div class="sidebar">
      <div class="top_items">
        <span>Online School</span>
        <router-link to="/lessons"><i class="fas fa-film pad"></i>Мое обучение</router-link>
        <router-link to="/courses"><i class="far fa-envelope pad"></i>Программы обучения</router-link>
      </div>
      <div class="bottom_items">
        <router-link to="/"><i class="fas fa-directions pad"></i>Главная</router-link>
        <router-link to="/user" v-if="$store.state.user.id !== null"><i class="fas fa-user pad"></i>Личный кабинет</router-link>
      </div>
    </div>
    <div class="header">
      <div class="wrapper_auth" v-if="$store.state.user.id === null">
          <router-link to="/signin">Авторизация</router-link>
          <router-link to="/signup">Регистрация</router-link>
      </div>
      <div class="wrapper_auth" v-else @click="logout">
        <i class="fas fa-sign-out-alt exit"></i>
      </div>
    </div>
    <router-view class="content_main"/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      user:{
        id: Number,
        login: ''
      }
    }
  },
  methods:{
    logout(){
      this.$store.commit('clearAll');
      localStorage.removeItem("userId");
      localStorage.removeItem("userLogin");
      localStorage.removeItem("userName");
      localStorage.removeItem("userSurname");
      localStorage.removeItem("userPhone");
    }
  },
  created: async function(){
    if(localStorage.getItem("userId")){
      let id = localStorage.getItem("userId");
      let login = localStorage.getItem("userLogin")
      this.$store.commit('setId', id);
      this.$store.commit('setLogin', login);
      this.user.id = id;
      this.user.login = login;
      if(localStorage.getItem("userName") !== null){
        this.$store.commit("setName", localStorage.getItem("userName"));
      }
      if(localStorage.getItem("userSurname") !== null){
        this.$store.commit("setSurname", localStorage.getItem("userSurname"));
      }
      if(localStorage.getItem("userPhone") !== null){
        this.$store.commit("setPhone", localStorage.getItem("userPhone"));
      }
      await this.axios.post('/api/courses/get', {userId: this.user.id}).then(res=>{
        this.$store.commit("setCourses", res.data);
        console.log(this.$store.state.courses);
      });
    } else{
      console.log('you r not authorized');
    }
  }
}
</script>
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
button:hover{
  cursor:pointer;
  background-color: #389b70;
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
  font-size:1.5rem;
  margin: .8rem 0;
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
