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
    <!-- <button @click="add">加1</button>
    <button>减1</button>
    <p>count为：{{count}}</p> -->
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  // computed: {
  //   count: 2
  // },
  // methods: {
  //   add () {
  //     // 派发action
  //     this.$store.dispatch('add')
  //   }
  // }
};
</script>

<style>
</style>