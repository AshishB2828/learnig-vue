<template>
    <div>
        <h3>{{event.title}}</h3>
        <p>@ {{ event.time }} on {{ event.date }}</p>
        <p>{{ event.attendies ? event.attendies.length:"" }} attending</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: ['id'],
    created(){
        this.$store.dispatch("events/fecthEvent", this.id);
    },
    computed:mapState({event: state => state.events.event})
}
</script>
