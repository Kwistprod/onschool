<template>
<div class="wrapper_content_about">
    <span class="scope">{{about.scope}}</span>
    <div class="about">
        <h1>Описание курса</h1>
        <div class="about_specs">
            <div class="cont">
                <span class="top"><i class="fas fa-video pad"></i>{{about.classes}}</span>
                <span>уроков(а)</span>
            </div>
            <div class="cont">
                <span class="top"><i class="fas fa-book pad"></i>{{about.classes}}</span>
                <span>заданий(я)</span>
            </div>
        </div>  
        <h2 class="about_desc">{{about.description}}</h2>
        <button @click="enroll">Записаться на курс</button>  
    </div>
</div>

</template>

<script>
export default {
    name:'AboutCourses',
    data(){
        return{
            about: {}
        }
    },
    methods:{
        enroll(){
            this.axios.post('http://localhost:8080/api/courses', {userId: this.$store.state.user.id, id: this.about.id}).then(res=>{
                console.log(res.data);
            }).catch(err=>console.log(err));
            this.$router.go(-1);
        }
    },
    created(){
        console.log(this.$route.params.id);
        this.about = this.$store.state.courses.avcourses[this.$route.params.id]
    },
}
</script>

<style lang="scss">
$color: #7fc7a8;
.about{
    .about_specs{
        margin-top: 5rem;
        display:flex;
        flex-direction:row;
        justify-content:center;
        .cont{
            display:flex;
            flex-direction: column;
            span{
                font-size: 1.5rem;
            }
            .top{
                margin: 1rem 3rem;
                font-size:2rem;
            }
        }
    }
    button{
        margin-top: 1.4rem;
        border:none;
        background-color: $color;
        padding: 1.6rem;
        font-size: 1.65rem;
    }
    .about_desc{
        margin: 5rem 20%;
    }
    text-align: center;
}
.scope{
    
    color:white;
    background-color:grey;
    padding: .3rem;
}
.wrapper_content_about{
    text-align:left;
    padding:2rem 3rem;
    background-color: white;
}
</style>