import Vue from 'vue'
import Vuex from 'vuex'
import * as events from "./module/event";

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    events
  }
})
