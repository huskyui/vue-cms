<template>
    <div>
        <mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: ''
        }
    },
}
</script>
<style scoped>
.mint-search{
    margin-top: 5px;
}
</style>
