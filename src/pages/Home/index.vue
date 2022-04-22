<template>
  <div>
    <!-- typeNav已经全局引入了 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
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
import mapState from "vuex";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    // 获取用户信息在首页展示
    this.$store.dispatch("userInfo");

    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => {
        state.home.floorList;
      },
    }),
  },
};
</script>

<style>
</style>