<template>
    <div class="nav">
        <nav>
            <router-link class="nav-link" :to="{ name: 'event-list'}">Events</router-link> |
            <router-link  class="nav-link":to="{ name: 'event-create'}">Create</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav{
    width: 100%;
    height: 70px;
    background: rgb(4,62,25);
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(4,62,25,1) 20%, rgba(107,223,17,1) 87%);
}
.nav-link{
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
}
</style>