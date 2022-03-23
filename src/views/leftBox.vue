<template>
  <el-aside class="aside">
    <el-input v-model="searchValue" @change="searchFile($event)" :clearable='true' class="file-search" placeholder="搜索"
      prefix-icon="el-icon-search" />
    <div v-for="(file, index) in fileList" :key="file.id">
      <div v-if="file.isEdit==false" @click="fileClick(file)" class="file-box" :class="{active: file.selected}">
        <i class="el-icon-document"></i>
        <span class="file-name">{{file.title}}</span>
        <i class="el-icon-edit" @click.stop="editStateHandle(file, true)"></i>
        <i class="el-icon-delete" @click.stop="removeFile(index)"></i>
      </div>
      <div v-else class="edit-box">
        <el-input v-model="file.title" @change="changeFileName(file)" />
        <i class="el-icon-close" @click="editStateHandle(file, false)"></i>
      </div>
    </div>
    <el-button-group class="bottom-btns">
      <el-button type="primary">新建</el-button>
      <el-button type="primary">导入</el-button>
    </el-button-group>
  </el-aside>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations
  } from 'vuex'
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
      ...mapState(['files']),
      ...mapGetters({
        fileList: "fileList"
      })
    },
    methods: {
      ...mapMutations(['removeFile', 'editState', 'changeFileName', 'searchFile', 'fileClick']),
      editStateHandle(file, state) {
        let payload = {
          ...file,
          isEdit: state
        }
        this.editState(payload)
      }
    }
  }

</script>

<style lang="less" scoped>
  .aside {
    width: 25% !important;
    overflow: hidden;
    background-color: #5aa7a7;
    position: relative;

    ::v-deep .el-input__inner {
      border-radius: 0;
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid #DCDFE6
    }

    // 中间文件列表
    .file-box {
      height: 45px;
      line-height: 45px;
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

    .file-box:hover {
      background-color: rgba(186, 201, 74, 0.3);
    }

    .file-box.active {
      background-color: rgba(186, 201, 74, 1);
    }

    .edit-box {
      // box-sizing: content-box;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      color: #fff;
      background-color: #6c8cbf;
      border-bottom: 1px solid #DCDFE6;
      font-size: 17px;
      display: flex;
      align-items: center;

      ::v-deep .el-input__inner {
        border: 0;
      }

      .el-icon-close {
        padding-right: 10px;
      }
    }

    // 底部按钮组
    .bottom-btns {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      ::v-deep .el-button {
        flex: 1;
      }
    }
  }

</style>
