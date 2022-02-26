<template>
<router-link class="event-link" :to="{ name: 'event-show',params:{ id: event.id}}">
    <div class="event__card shadow">
        <div class="event__details">
            <span class="time">@{{ event.time }} on {{ event.date }}</span>
            <h4 class="title">{{event.title}}</h4>
            <span class="attendence"><span >{{ event.attendees.length }}</span> attending</span>
        </div>
        <div class="event-sidebox1">
            <div class="event-sidebox1-inner">

            </div>
        </div>
    </div>
</router-link> 
</template>

<script>
export default {
    props:{
        event: Object
    }
}
</script>

<style scoped>
    .title{
        font-size: 28px;
        line-height: 1.2;
        color: #0d2880;
    }
    .event__card{
        border-radius: 10px;
        width: 400px;
        display: flex;
        min-height: 100px;
        background: white;
    }
    .event__details{
        text-align: left;
        padding: 10px;
        padding-left: 20px;
        width: 80%;
    }
    .event-sidebox1{
        width: 20%;
        background:rgb(77, 172, 5);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .event-sidebox1-inner{
        background: rgb(124, 209, 59);
        height: 100%;
        width: 85%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .attendence{
        font-weight: 800;
    }
    .attendence span{
        color: #D82148;
        font-size: 20px;
        
    }
    .time{
        font-weight: 700;
        color:#DADBBD ;
    }
    
</style>