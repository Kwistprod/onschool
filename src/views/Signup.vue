<template>
    <div class="wrapper_content_sign">
        <span>Регистрация</span>
        <div class="sign">
            <input type="text" placeholder="Email" v-model="user.login">
            <input type="password" placeholder="Пароль" v-model="user.password">
            <button @click="send">Зарегистрироваться</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Signup',
    data(){
        return{
            user:{
                login: '',
                password: '',
            }
        }
    },
    methods:{
        async send(){
            if(this.user.login != '' && this.user.password != ''){
                this.axios.post('/api/user', this.user)
                .then(res=>{
                    if(res.status == 200){
                        this.$store.commit('setId', res.data.id);
                        this.$store.commit('setLogin', res.data.login);
                        localStorage.setItem("userId", res.data.id);
                        localStorage.setItem("userLogin", res.data.login);
                        this.$router.push("/");
                        this.axios.post('/api/courses/get', {userId: res.data.id}).then(res=>{
                            this.$store.commit("setCourses", res.data);
                    });
                    }else{
                        alert('Ошибка!');
                    }
                })
                .catch(err=>{
                    this.user.password = '';
                    alert('Ошибка');
                    console.log(err);
                });
            }
        }
    }

}
</script>
<style lang="scss">
$color: #7fc7a8;
.wrapper_content_sign{
    padding: 2rem 0;
    span{
        font-size:2rem;
    }
    input{
        color: rgba(0, 0, 0, 0.925);
        font-size: 1.35rem;
        border:none;
        border-bottom: .1rem solid rgba(0, 0, 0, 0.39);
        margin: 1.4rem 0;
    }
    button{
        margin-top: 1.4rem;
        border:none;
        background-color: $color;
        padding: 1rem;
        font-size: 1.2rem;
    }
}
button:hover{
  cursor:pointer;
  background-color: #389b70;
}
.sign{
    display:flex;
    flex-direction: column;
    margin: 5rem 40%;
}
</style>