<template>
<div id="app">
  <header>
    <the-header/>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <the-footer/>
  </footer>
</div>
</template>

<style>

</style>


<script>
import TheFooter from './components/The-Footer.vue';
import TheHeader from "./components/TheHeader.vue";

  export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter
  },

  }

  
</script>
