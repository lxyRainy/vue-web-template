<template>
  <div class="inner">
    <FormDemo />
    <TreeTransferDemo />
    <EchartsDemo />
    <WebsocketDemo />
    <TableFilter />
  </div>
</template>

<script>
import FormDemo from "./FormDemo.vue";
import TreeTransferDemo from "./TreeTransferDemo";
import EchartsDemo from "./EchartsDemo";
import WebsocketDemo from "./WebsocketDemo";
import TableFilter from "./TableFilter";
export default {
  name: "PageDemo",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  components: {
    TreeTransferDemo,
    FormDemo,
    EchartsDemo,
    WebsocketDemo,
    TableFilter,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped lang="less">
</style>