<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1"  :max="max" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1:this.num
      };
    },
    props:['max','num','id'],
    methods: {
      handleChange(value) {
          var info = {id: parseInt(this.id),count: parseInt(value)};
          this.$store.commit("update",info);
      }
    }
  };
</script>