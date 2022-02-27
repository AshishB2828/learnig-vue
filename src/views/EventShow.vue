<template>
    <div>
        <h3>{{event.title}}</h3>
        <p>@ {{ event.time }} on {{ event.date }}</p>
        <p>{{ event.attendies ? event.attendies.length:"" }} attending</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    props: ['id'],
    created(){
        this.fecthEvent(this.id);
    },
    computed:mapState({event: state => state.events.event}),
    methods: mapActions("events", ['fecthEvent'])
}
</script>
