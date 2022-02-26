<template>
    <div class="event__listWrapper">
        <h1>Event List</h1>
        <br>
        <EventCard />
    </div>

</template>
<script>
import EventCard from "../components/EventCard.vue";
export default {
    components: {EventCard}
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