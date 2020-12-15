<template>
    <div class="wrapper_content_user">
        <span class="title">Личный кабинет</span>
        <div class="user_top">
            <div class="user_ico">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="user_data">
                <span>name fio</span>
                <span class="mail">fdsfdsdfs@mail</span>
            </div>
        </div>
        <span class="title">Персональная информация</span>
        <div class="user_bottom">
            <input type="text" placeholder="Имя">
            <input type="text" placeholder="Фамилия">
            <input type="text" placeholder="Телефон">
            <button >Сохранить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',

}
</script>
<style lang="scss">
$color: #7fc7a8;
.wrapper_content_user{
    .title{
        font-size:2rem;
    }
    padding: 2rem 6rem; 
}
.user_top{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem 0;
}
.user_bottom{
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