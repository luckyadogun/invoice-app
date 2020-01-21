<template>
  <main id="top-nav">
    <nav class="navbar navbar-light bg-white main-nav">
      <a class="navbar-brand" href="#"><img src="../assets/logo.svg" /></a>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          L
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click="logOut">Logout</a>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push('/login')
    }
  }
 
}
</script>

<style scoped>

#top-nav .main-nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

#top-nav .main-nav .username-container {
  width: 58px;
  height: 58px;
  background: #4C75EB;
  color: #ffffff;
  text-align: center;
  border-radius: 100%;
  font-size: 37px;
  font-weight: 800;
}

.dropdown-toggle:after { 
  content: none 
}

.dropdown-menu {
  left: -100px;
}

.dropdown button {
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background: #4C75EB;
  border: none;
}

.dropdown button:active,
.dropdown button:focus{
  box-shadow: none !important;
  outline: none !important;
  background: #4C75EB;
}

</style>