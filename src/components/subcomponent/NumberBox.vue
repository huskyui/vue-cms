<template>
  <el-input-number v-model="num" @change="handleChange" :min="1"  :max="max" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    props:['max'],
    methods: {
      handleChange(value) {
        this.$emit("getCount",parseInt(value))
      }
    }
  };
</script>