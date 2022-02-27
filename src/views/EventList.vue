<template>
    <div class="event__listWrapper">
        <h1>Event List</h1>
        <br>
        <div>
        <EventCard
            v-for="event in events.events" 
            :key="event.id"
            :event = "event"
            style="margin: 0px 10px"
        />
        <template v-if="page!=1">
        <router-link
            :to="{ name: 'event-list', query:{ page: page - 1}}"
            rel="prev"
        >Prev</router-link>
        </template> |
        <template v-if="isNextPage">
        <router-link
            :to="{ name: 'event-list', query:{ page: page + 1}}"
            rel="next"
        >Next</router-link>
        </template>
        </div>
    </div>

</template>
<script>
import EventCard from "../components/EventCard.vue";
import { mapState } from 'vuex';

export default {
    components: {EventCard},
    
    created(){
        this.$store.dispatch("events/fecthEvents",{perPage: 3, page: this.page})
    },
    computed: {
        page(){
            return parseInt(this.$route.query.page) || 1;
        },
        isNextPage(){
            return this.page * 3 <  parseInt(this.events.totalEvents);
        },
        ...mapState(['events']),
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