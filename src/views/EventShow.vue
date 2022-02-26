<template>
    <div>
        <h3>{{event.title}}</h3>
        <p>@ {{ event.time }} on {{ event.date }}</p>
        <p>{{ event.attendees ? event.attendees.length:"" }} attending</p>
    </div>
</template>

<script>
import api from "../services/EventServices";

export default {
    props: ['id'],
    data(){
        return{
            event:{}
        }
    },
    created(){
        api.getEvent(this.id)
        .then(({data}) => this.event = data)
        .catch(err => console.log(err))
    }
}
</script>
