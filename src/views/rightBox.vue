<template>
  <el-main class="main">
    <el-tabs v-model="activeId" type="card" closable @tab-remove="removeTab">
      <el-tab-pane label="用户管理" name="1" class="tab-pane">
        <pmd v-model="content"></pmd>
      </el-tab-pane>
      <el-tab-pane label="用户管理" name="2" class="tab-pane">
        <pmd v-model="content"></pmd>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<script>
  import wangeditor from 'wangeditor-vue'
  export default {
    name: 'RightBox',
    components: {wangeditor},
    props: {},
    data() {
      return {
        activeId: '1', // 当前激活的打开的文件
        content: '# a1aa'
      }
    },
    computed: {},
    watch: {},
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
