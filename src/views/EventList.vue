<template>
    <div class="event__listWrapper">
        <h1>Event List</h1>
        <br>
        <div>
        <EventCard
            v-for="event in events" 
            :key="event.id"
            :event = "event"
            style="margin: 0px 10px"
        />
        </div>
    </div>

</template>
<script>
import EventCard from "../components/EventCard.vue";
import api from "../services/EventServices";

export default {
    components: {EventCard},
    data(){
        return{
            events: []
        }
    },
    created(){
        api.getEvents()
        .then(({data}) => this.events = data)
        .catch(err=>console.log(err))
    }
    }
</script>

<style scoped>
.event__listWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>