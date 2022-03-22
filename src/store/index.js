import Vue from 'vue'
import Vuex from 'vuex'
import initFiles from '@/utils/initFiles.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files: initFiles, // 总文件
    openFiles: [], // 打开的文件
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
