<template>
  <div class="click_button_menu_wrapper" v-if="isOpen" @click="close">
    <header-top @click.stop/>
  </div>
</template>

<script>
import HeaderTop from '../Header/HeaderTop.vue'

export default {
    name: "Click-Button-Menu",
    components: {
        HeaderTop,
    },
  props: {
    isOpen: {
    type: Boolean,
    },
  },

  emits: {
    close: null,
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    },


    close() {
      this.$emit("close");
    },
  },

}
</script>

<style>
.click_button_menu_wrapper {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 72px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8); 
}


</style>