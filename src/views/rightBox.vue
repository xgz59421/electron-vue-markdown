<template>
  <el-main class="main">
    <el-tabs v-model="activeId" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="file in openFiles" :key="file.id" :label="file.title" :name="file.id" class="tab-pane">
        <wangeditor v-model="file.body" key="file.id"></wangeditor>
      </el-tab-pane>

    </el-tabs>
    <!-- <el-button @click="test">xxx</el-button> -->
  </el-main>
</template>

<script>
  import wangeditor from 'wangeditor-vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'RightBox',
    components: {
      wangeditor
    },
    props: {},
    data() {
      return {
        activeId: '', // 当前激活的打开的文件
      }
    },
    computed: {
      ...mapState(['openFiles']),
    },
    watch: {
      openFiles(val) {
        val && val.forEach(file => {
          this.activeId = file.id
        })
      }
    },
    created() {},
    mounted() {},
    methods: {
      removeTab() {

      },
      uploadFn() {

      }
    },
  }

</script>

<style lang='less' scoped>
  .main {
    background-color: #96d7c6;
    padding: 0;

    ::v-deep .el-tabs__header {
      margin: 0;
    }

    .editor {
      margin: 0;
      height: calc(100vh - 41px);
    }
  }

</style>
