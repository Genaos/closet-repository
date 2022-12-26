<template>
  <div class="about">
    <MegaMenu
        v-if="isMegaMenuVisible"
        @closeMegaMenu="closeMegaMenu"
    />
    <h1>This is an about page</h1>
        <button
        @click="showMegaMenu"
        >
      Show info
    </button>
  </div>
</template>

<script>
import MegaMenu from '../components/MegaMenu.vue';
  export default {
    name: "About",
    components: {
      MegaMenu
    },
    props: {

    },
    data() {
      return {
        isMegaMenuVisible: false
      }
    },
    computed: {},
    methods: {
      showMegaMenu() {
        this.isMegaMenuVisible = true;
      },
      closeMegaMenu() {
        this.isMegaMenuVisible = false;
      },
    },
  }
</script>
