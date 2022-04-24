<template>
  <div>
    <!-- typeNav已经全局引入了 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="f in floorList" :key="f.id" :floor="f" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    // 获取用户信息在首页展示
    this.$store.dispatch("userInfo");

    this.$store.dispatch("getFloorList");
  },
  computed: {
    //state:他是咱们大仓库中的state（包含home|search）
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
    // floorList() {
    //   return this.$store.state.home.floorList;
    // },
  },
};
</script>

<style>
</style>