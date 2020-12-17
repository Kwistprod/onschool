<template>
    <div class="wrapper_content_user">
        <span class="title fix">Личный кабинет</span>
        <div class="user_top">
            <div class="user_ico">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="user_data">
                <span>{{user.name + ' ' + user.surname}}</span>
                <span class="mail">{{user.login}}</span>
            </div>
        </div>
        <div class="user_bottom">
            <span class="title">Персональная информация</span>
            <input type="text" placeholder="Имя" v-model="user.name">
            <input type="text" placeholder="Фамилия" v-model="user.surname">
            <input type="text" placeholder="Телефон" v-model="user.phone">
            <button @click="save">Сохранить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    data(){
        return{
            user: this.$store.state.user
        }
    },
    methods:{
        async save(){
            this.axios.put('/api/user', this.user)
                .then(res=>{
                    if(res.status == 200){
                        alert('Данные успешно изменены!');
                    }
                })
                .catch(err=>console.log(err));
            if(this.user.name != ''){
                localStorage.setItem("userName", this.user.name);
            }
            if(this.user.surname != ''){
                localStorage.setItem("userSurname", this.user.surname);
            }
            if(this.user.phone != ''){
                localStorage.setItem("userPhone", this.user.phone);
            }
        }
    },
    mounted:function(){

    }

}
</script>
<style lang="scss">
$color: #7fc7a8;
button:hover{
  cursor:pointer;
  background-color: #389b70;
}
.wrapper_content_user{
    background-color:rgb(230, 230, 230);
    text-align: left;
    .title{
        font-size:2rem;
    }
}
.user_top{
    padding: .5rem 3rem;
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem 0;
}
.user_bottom{
    padding: 2rem 3rem 5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    margin-top:2rem;
    input{
        color: rgb(0, 0, 0);
        font-size: 1.35rem;
        border:none;
        border-bottom: .1rem solid rgba(0, 0, 0, 0.39);
        margin: 1.4rem 0;
        margin-right: 50%;
    }
    button{
        align-self: flex-start;
        margin-top: 1.4rem;
        border:none;
        background-color: $color;
        padding: 1rem;
        font-size: 1.2rem;
    }
    .title{
        margin-bottom: 3rem;
        font-size:1rem;
    }
}
.user_ico{
    margin:2rem 0;
    font-size:6rem;
    border-radius: 50%;
    background-color: rgb(230, 230, 230);
    padding: 1.2rem;
    max-width: max-content;
    max-height: max-content;
}

.user_data{
    font-size:2rem;
    margin-left:2rem;
    display:flex;
    flex-direction: column;
    .mail{
        font-size: 1rem;
    }
}
</style>