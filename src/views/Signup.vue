<template>
    <div class="wrapper_content_sign">
        <span>Регистрация</span>
        <div class="sign">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Пароль">
            <button>Зарегистрироваться</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Signup',

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
.sign{
    display:flex;
    flex-direction: column;
    margin: 5rem 40%;
}
</style>