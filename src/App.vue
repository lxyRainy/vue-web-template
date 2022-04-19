<template>
  <div id="app">
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 控制Footer的显隐 -->
    <Footer v-show="$route.meta.footer" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 获取三级列表
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>
