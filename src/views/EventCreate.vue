<template>
    <div class="form__wrapper">
        <form @submit.prevent="createEvent">
                <h1>Create Event</h1>
                <div class="field">
                    <label >Name</label>
                    <input
                    placeholder="Enter Title...."
                    type="text"
                    v-model="event.title"
                    >
                </div>
                <div class="field">
                    <label >Time</label>
                    <select v-model="event.time">
                        <option v-for="time in times" :key="time">{{ time }}</option>
                    </select>
                </div>
                <div class="field">
                    <label >Attendies</label>
                    <input
                    placeholder="Enter Attendies...."
                    type="text"
                    v-model="attendies"
                    >
                </div>
                <div class="field">
                    <label >Select Date</label>
                    <DatePicker
                        class="date"
                        v-model="event.date"
                        placeholder = "pick a date...."
                    />
                </div>
                <button>submit</button>
        </form>
    </div>
</template>
<script>
import DatePicker from "vuejs-datepicker";
export default {
    components:{
        DatePicker
    },
    data(){
        const times=[]
        for(let i =1; i<=24; i++){
            times.push(i+':00')
        }
        return{
            times,
            event: this.createFreshEventObject(),
            attendies:""
            
        }
    },
    methods:{
        createFreshEventObject(){
            const id = Math.floor(Math.random() * 1000);
            return{
            id,
            title:'',
            date:'',
            time:"",
            attendies:[]
            }
        },
        createEvent(){
            this.event.attendies = [...this.attendies.split(",")]
            this.$store.dispatch('createEvent', this.event)
            .then(()=>{
                this.$router.push({
                    name: 'event-show',
                    params:{id: this.event.id}
                });
                this.event = this.createFreshEventObject()
                })
            .catch(()=> console.log("createEvent error!"));

        }
    },
    computed:{
        
    }
}
</script>
<style scoped>
.form__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
.field{
    margin: 10px 0;
    display: flex;
    flex-direction: column;
}
.field label{
    text-align: left;
    width: 100%;
}
input{
    width: 100% !important;
    padding: 5px;
}

</style>