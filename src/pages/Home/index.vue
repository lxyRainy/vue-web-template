<template>
  <div>
    <!-- typeNav已经全局引入了 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like },
};
</script>

<style>
</style>