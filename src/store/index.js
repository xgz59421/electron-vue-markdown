import Vue from 'vue'
import Vuex from 'vuex'
import initFiles from '@/utils/initFiles.js'
import { MessageBox } from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files: initFiles, // 总文件
    searchFiles: [], // 搜索文件
    openFiles: [], // 打开的文件
  },
  getters: {
    fileList(state) {
      return state.searchFiles.length > 0 ? state.searchFiles : state.files
    }
  },
  mutations: {
    // 搜索文件
    searchFile(state, name) {
      if (name == '') {
        state.searchFiles = []
      } else {
        state.searchFiles = state.files.filter((file) => file.title.includes(name))
      }
    },
    // 文件点击
    fileClick(state, payload) {
      state.files.forEach((file) => {
        file.selected = false
        if (file.id == payload.id) {
          file.selected = true
        }
      })
    },
    // 修改文件状态
    editState(state, payload) {
      state.files.forEach(file => {
        file.isEdit = false
        if (file.id == payload.id) {
          file.isEdit = payload.isEdit
        }
      })
    },
    // 修改文件名
    changeFileName(state, payload) {
      for (let i = 0; i < state.files.length; i++) {
        const file = state.files[i]
        if (file.id != payload.id && file.title == payload.title) {
          MessageBox({
            type: 'error',
            message: '已存在相同文件名'
          })
          return
        }
      }
      state.files.forEach(file => {
        if (file.id == payload.id) {
          file.isEdit = false
          file.title = payload.title
        }
      })
    },
    // 文件删除
    removeFile(state, index) {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示').then(() => {
        state.files.splice(index, 1)
        MessageBox({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        MessageBox({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  actions: {},
  modules: {}
})
