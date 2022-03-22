<template>
  <el-container class="container">
    <el-aside class="aside">

    </el-aside>
    <el-main class="main">

    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
  }

</script>

<style lang="less" scoped>
  .container {
    height: 100vh;
    .aside {
      width: 25% !important;
      // height: 100%;
      background-color: #5aa7a7;
    }

    .main {
      background-color: #96d7c6;
      padding: 0;
    }
  }

</style>
