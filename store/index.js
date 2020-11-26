import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// import the auto exporter
import modules from './modules'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = () => {
  return new Vuex.Store({
    modules: {
      ...modules,
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : [],
  })
}
export default store
