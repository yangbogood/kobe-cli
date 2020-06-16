<template>
  <div class="home">
    <img alt="Vue logo" :src="img" />
    <cc-button></cc-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      img: require("@/assets/logo.png")
    };
  }
};
</script>
