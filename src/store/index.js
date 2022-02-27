import Vue from 'vue'
import Vuex from 'vuex'
import EventServices from "../services/EventServices";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abcdfg', name:"Afsal"},
    events:[],
    totalEvents:0,
    event:{}
  },
  getters: {
  },
  mutations: {
    ADD_EVENT(state, payload){
      state.events.push(payload)
    },
    SET_EVENT(state, payload){
      state.events = payload.events;
      state.totalEvents = payload.totalEvents;
    },
    GET_EVENT(state, payload){
      state.event = payload.event;
    }
  },
  actions: {
    createEvent(state, event){
      return EventServices.postEvent(event)
      .then(() =>{
        state.commit('ADD_EVENT', event)
      });
    },
    fecthEvents(state, { perPage, page }){
      EventServices.getEvents(perPage, page)
      .then((res) =>{ 
          let totalEvents = res.headers['x-total-count'];
          state.commit("SET_EVENT", {events: res.data, totalEvents});
        })
        .catch((err) => console.log(err));
    },
    fecthEvent(state, id){
      EventServices.getEvent(id)
      .then(res => {
        state.commit("GET_EVENT", {event: res.data})
      })
      .catch(err => console.log(err));
      ;
    }
  },
  modules: {
  }
})
