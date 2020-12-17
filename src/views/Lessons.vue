<template>
    <div class="wrapper_content_courses">
        <div class="card_container" v-if="mycourses.length > 0">
            <div class="card" v-for="(item, id) in mycourses" v-bind:key="id" >
                <div class="side_left">
                    <span class="scope">{{item.scope}}</span>
                    <span>{{item.title}}</span>
                    <span @click="start(item.Users[0].userlessons, item.id)">Продолжить</span>
                </div>
                <div class="side_center">
                    <div class="cont">
                        <!-- <span><i class="fas fa-video pad"></i>{{item.Users[0].userlessons[getId(item.Users[0])].current_lesson - 1}}</span> -->
                        <span><i class="fas fa-video pad"></i>{{(getLess(item.Users[0].userlessons, item.id)-1)}} / {{item.classes}}</span>
                        <span>уроков(а)</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-book pad"></i>{{(getDZ(item.Users[0].userlessons, item.id)-1)}} / {{item.classes}}</span>
                        <span>заданий(я)</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-check pad"></i>{{getPercent(item.Users[0].userlessons, item.id, item.classes)}}</span>
                        <span>прогресс</span>
                    </div>
                </div>
                <div class="side_right" @click="start(item.Users[0].userlessons, item.id)">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <h1 v-else>Вы не записаны ни на один курс</h1>
    </div>
</template>
<script>
export default {
    name: 'Courses',
    data(){
        return{
            user: this.$store.state.user,
            mycourses: [],
        }
    },
    methods:{
        getLess(item, courseId){
            return (item.find(i=>i.course_id == courseId).current_lesson);
        },
        getDZ(item, courseId){
            return (item.find(i=>i.course_id == courseId).current_dz);
        },
        getPercent(item, courseId, total){
            return ((((this.getLess(item, courseId)-1) + (this.getDZ(item, courseId)-1)) / (total*2)) * 100);

        },
        start(item, courseId){
            this.$router.push(`/lessons/${courseId}/${(this.getLess(item, courseId))}`);
        }
    },
    created:function(){
        // this.axios.post('http://localhost:8080/api/courses/get', {userId: this.user.id}).then(response=>{
        //     console.log(response.data);
        //     this.avcourses = response.data.avcourses;
        //     this.mycourses = response.data.mycourses;
            
        // });
    
        this.mycourses = this.$store.state.courses.mycourses;
        console.log('this.mycourses :>> ', this.mycourses);
    }
}
</script>
<style lang="scss">
$color: #7fc7a8;
.pad{
    margin:0 .2rem;
}
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
    padding: 1.5rem 0;
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
.wrapper_content_courses{
    color: $color;
    background-color:rgb(230, 230, 230);
}
</style>