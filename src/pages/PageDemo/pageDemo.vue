<template>
  <div class="inner">
    <FormDemo />
    <TreeTransferDemo/>
  </div>
</template>

<script>
import FormDemo from './FormDemo.vue'
import TreeTransferDemo from './TreeTransferDemo'
export default {
  name: 'PageDemo',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  components: {
    TreeTransferDemo,
    FormDemo,
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>

<style scoped lang="less">
</style>