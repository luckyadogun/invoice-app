<template>
  <main id="main-container">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
#main-container {
  border-left: 60px solid #4c75eb;
  height: 100vh;
  overflow-y: scroll;
}
</style>