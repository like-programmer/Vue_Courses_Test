import Vue from 'vue';
import Vuex from 'vuex';
import mainData from './mainData';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {mainData}
});
