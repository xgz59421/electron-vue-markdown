<template>
  <el-aside class="aside">
    <el-input v-model="searchValue" placeholder="搜索" prefix-icon="el-icon-search" />
    <div v-for="file in files" :key="file.id">
      <div v-if="file.isEdit==false" class="file-box">
        <i class="el-icon-document"></i>
        <span class="file-name">{{file.title}}</span>
        <i class="el-icon-edit" @click="editHandle(file)"></i>
        <i class="el-icon-delete" @click="removeHandle(file)"></i>
      </div>
      <div v-else class="edit-box">
        <el-input v-model="file.title" @change="changeFileName(file)"/>
      </div>
    </div>

  </el-aside>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'LeftBox',
    components: {},
    props: {},
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapState(['files'])
    },
    methods: {
      editHandle(file) {
        console.log('file', file)
      },
      changeFileName(file) {
        
      },
      removeHandle(file) {

      }
    }
  }

</script>

<style lang="less" scoped>
  .aside {
    width: 25% !important;
    overflow: hidden;
    background-color: #5aa7a7;

    ::v-deep .el-input__inner {
      border-radius: 0;
      background-color: #5aa7a7;
      border: 0;
      border-bottom: 1px solid #DCDFE6
    }

    .file-box {
      height: 42px;
      line-height: 42px;
      color: #fff;
      border-bottom: 1px solid #CCCCCC;
      font-size: 17px;
      // padding: 8px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;

      .el-icon-document,
      .el-icon-edit,
      .el-icon-delete {
        flex-grow: 1;
        padding: 0 10px;
      }

      .file-name {
        flex-grow: 100;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        /*超出部分以点号代替*/
      }
    }
    .edit-box {
      height: 42px;
      line-height: 42px;
      color: #fff;
      border-bottom: 1px solid #CCCCCC;
      font-size: 17px;
    }
  }

</style>
