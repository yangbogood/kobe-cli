<template>
  <div class="user">
    这是User模块
  </div>
</template>

<script>
import userMixin from "../../mixins/new-mixin";
export default {
  name: "User",
  mixins: [userMixin], // 引入mixin
  async created() {
    console.info(this.getNewsResponse);
  }
};
</script>

<style lang="scss">
.user {
  color: red;
}
</style>
