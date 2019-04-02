<template>
  <el-input-number v-model="num2" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: this.count
      }
    },
    props:["count"]
  };
</script>