<template>
    <div class="wrapper_content_courses">
        <div class="card_container" v-if="$store.state.user.id !== null">
            <!-- <div class="card" v-for="(item, id) in mycourses" v-bind:key="id" >
                <div class="side_left">
                    <span class="scope">{{item.scope}}</span>
                    <span>{{item.title}}</span>
                    <span>Продолжить</span>
                </div>
                <div class="side_center">
                    <div class="cont">
                        <span><i class="fas fa-video pad"></i>{{item.lessons}}</span>
                        <span>уроков(а)</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-book pad"></i>{{item.lessons}}</span>
                        <span>заданий(я)</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-check pad"></i>65%</span>
                        <span>прогресс</span>
                    </div>
                </div>
                <div class="side_right">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div> -->

            <div class="card" v-for="(item, id) in avcourses" v-bind:key="id" >
                <div class="side_left">
                    <span class="scope">{{item.scope}}</span>
                    <span>{{item.title}}</span>
                    <span @click="enroll(item.id)">Записаться</span>
                </div>
                <div class="side_center">
                    <div class="cont">
                        <span><i class="fas fa-video pad"></i>{{item.classes}}</span>
                        <span>уроков(а)</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-book pad"></i>{{item.classes}}</span>
                        <span>заданий(я)</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-clock pad"></i>{{item.classes * 40 + ' мин'}}</span>
                        <span>время</span>
                    </div>
                </div>
                <div class="side_right" @click="moveTo(id)">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <h1 v-if="avcourses.length == 0">Вы уже записаны на все курсы</h1>
        <h1 class="error" v-if="$store.state.user.id === null">Для просмотра содержимого необходимо зарегистрироваться</h1>
    </div>
</template>
<script>
export default {
    name: 'Courses',
    data(){
        return{
            user: this.$store.state.user,
            avcourses: {},
        }
    },
    methods:{
        moveTo:function(id){
            console.log('id :>> ', id);
            this.$router.push(`/courses/about/${id}`);
        }, 
        enroll(id){
            this.axios.post('http://localhost:8080/api/courses', {userId: this.user.id, id: id}).then(res=>{
                console.log(res.data);
            }).catch(err=>console.log(err));
            this.$router.go(0);
        }
    },
    created:function(){
        this.avcourses = this.$store.state.courses.avcourses;
        // this.axios.post('http://localhost:8080/api/courses/get', {userId: this.user.id}).then(response=>{
        //     console.log(response.data);
        //     this.avcourses = response.data.avcourses;
        //     this.mycourses = response.data.mycourses;
            
        // });
    }
}
</script>
<style lang="scss">
$color: #7fc7a8;
.grid{
    display:grid;
}
.card_container{
    display:grid;
    grid-template-rows: 1fr;
}
.card{
    margin-bottom: 2.5rem;
    display:grid;
    grid-template-columns: 3fr 2fr 1fr;
    padding: 1rem 1rem;
    background-color:white;
}
.side_left{
    .scope{
        color:white;
        background-color:grey;
        padding:.3rem;
    }
    span{
        margin:.5rem .6rem;
    }
    span:nth-child(2){
        font-size:1.5rem;
        color:rgb(20, 20, 20);
        margin:2rem 0 3rem 0;
    }
    span:nth-child(3){
        &:hover{
            cursor:pointer;
        }
    }
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    justify-self: left;
}
.side_center{
    display:flex;
    flex-direction:row;
    padding: 1.5rem 3rem;
    span{
        margin: .3rem 1.5rem;
    }
    .cont{
        display:flex;
        flex-direction: column;
    }
}
.side_right{
    font-size: 1.65rem;
    padding:.6rem;
    margin-right:2rem;
    justify-self: right;
    align-self: center;
    &:hover{
        cursor: pointer;
    }
}
.error{
    color:red;
}
.wrapper_content_courses{
    color: $color;
    background-color:rgb(230, 230, 230);
}
</style>