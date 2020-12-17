<template>
    <div class="wrapper_content_lesson">
        <div class="lesson">
            <div class="top">
                <span @click="back()">Назад</span>
                <span @click="forward()">Вперед</span>
            </div>
            <h1>Урок номер {{lesson.lesson_id}}</h1>
            <div class="player"><YoutubeVue3  ref="youtube" :videoid="lesson.url" :autoplay="0" :loop="play.loop" :width="900" :height="510" /></div>
            <button @click="checked">Просмотрено</button>
            <div class="form">
                <h1>Отправка домашнего задания</h1>
                <textarea name="" id="" cols="90" rows="10" v-model="text"></textarea>
                <button @click="sendDZ">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
export default {
    name: 'LessonsPage',
    data(){
        return{
            lesson: {},
            play : { video_id:"3P1CnWI62Ik", loop:0 },
            course:{},
            text: ''
        }
    },
    components: {
        YoutubeVue3
    },
    methods:{
        applyConfig() {
            this.play = Object.assign(this.play, this.temp)
        },
        playCurrentVideo() {
            this.$refs.youtube.player.playVideo();
        },
        stopCurrentVideo() {
            this.$refs.youtube.player.stopVideo();
        },
        pauseCurrentVideo() {
            this.$refs.youtube.player.pauseVideo();
        },
        checked(){
            let ul = this.course.Users[0].userlessons.find(item => item.course_id == this.$route.params.courseId);
            if(ul.current_lesson == this.lesson.lesson_id){
                this.course.Users[0].userlessons.find(item => item.course_id == this.$route.params.courseId).current_lesson++;
                this.axios.put('http://localhost:8080/api/mylessons', ul).then(res=>console.log(res)).catch(err=>console.log(err));
            }
        },
        async sendDZ(){
            let ul = this.course.Users[0].userlessons.find(item => item.course_id == this.$route.params.courseId);
            if(ul.current_dz == this.lesson.lesson_id){
                this.course.Users[0].userlessons.find(item => item.course_id == this.$route.params.courseId).current_dz++;
                this.axios.put('http://localhost:8080/api/mylessons', ul).then(res=>console.log(res)).catch(err=>console.log(err));
                const nodemailer = require("nodemailer");
                console.log(this.text);
            }
        },
        back(){
            console.log('back');
            if(this.lesson.lesson_id > 1){
                this.lesson.url = Object.assign(this.play, this.temp)
                this.lesson = this.course.lessons.find(item=>item.lesson_id == (this.lesson.lesson_id -1));
                console.log('this.lesson :>> ', this.lesson);
            }
        },
        forward(){
            console.log('forw');
            if(this.lesson.lesson_id < this.lesson.total){
                let ul = this.course.Users[0].userlessons.find(item => item.course_id == this.$route.params.courseId);
                console.log(ul.current_lesson);
                console.log(this.lesson.lesson_id);
                if(ul.current_lesson >= (this.lesson.lesson_id+1)){
                    console.log('yeap');
                    this.lesson = this.course.lessons.find(item=>item.lesson_id == (this.lesson.lesson_id + 1));
                }
                console.log('this.lesson :>> ', this.lesson);
            }
        }

    },
    created(){
        console.log(this.$route.params.lessonId);
        this.course = this.$store.state.courses.mycourses.find(item=>item.id == this.$route.params.courseId);
        console.log('course :>> ', this.course);
        this.lesson = this.course.lessons.find(item=>item.lesson_id == this.$route.params.lessonId);
        
    }
}
</script>

<style lang="scss">
$color: #7fc7a8;
.top{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    color: $color;
    span:hover{
        cursor: pointer;
    }
}
.lesson{
    display:flex;
    flex-direction:column;
    padding: 2rem 3rem;
}
button{
        margin-top: 1.4rem;
        border:none;
        background-color: $color;
        padding: 1rem;
        font-size: 1.2rem;
        width:fit-content;
        align-self:center;
}
.form{
    textarea{
        width:fit-content;
        align-self: center;
        font-size: 1.3rem;
        border: .1rem solid rgba(0, 0, 0, 0.342);
    }
    margin: 5rem;
    display:flex;
    flex-direction: column;
}
.player{
    align-self:center;
}
.wrapper_content_lesson{
    background-color: white;
}
</style>