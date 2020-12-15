<template>
    <div class="wrapper_content_courses">
        <div class="card_container">
            <div class="card">
                <div class="side_left">
                    <span class="scope">Scope</span>
                    <span>Title of the Course</span>
                    <span>continue there</span>
                </div>
                <div class="side_center">
                    <div class="cont">
                        <span><i class="fas fa-video pad"></i>33/34</span>
                        <span>уроков</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-book pad"></i>33/34</span>
                        <span>заданий</span>
                    </div>
                    <div class="cont">
                        <span><i class="fas fa-check pad"></i>65%</span>
                        <span>прогресс</span>
                    </div>
                </div>
                <div class="side_right">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Courses',
    created:function(){
        this.axios.get('').then(response=>{
            console.log('fdfd' + response);
        })
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
        &:hover{
            cursor:pointer;
        }
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