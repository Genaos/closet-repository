<template>
    <button class="icon_menu_button" @click="openClickButtonMenu">
        <span class="material-symbols-outlined">{{ iconName }}</span>
    </button>
      <click-button-menu class="click_button_menu"
      :is-open="isClickButtonMenuOpen"
      @close="isClickButtonMenuOpen = false"
      >
    </click-button-menu>
</template>

<script>
import ClickButtonMenu from '../Click-Button-Menu.vue';

export default {
    name: "Icon-Menu-Button",

    components: {
      ClickButtonMenu,

    },

    props: ['iconName'],

    data() {
      return { isClickButtonMenuOpen: false };
    },
    methods: {
      openClickButtonMenu() {
        this.isClickButtonMenuOpen = true;
      }
    },
}
</script>

<style>

.icon_menu_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    color: #ffffff;
}

.click_button_menu {
  display: none;
}

@media (max-width: 1239px) {
  .click_button_menu {
    display: block;
  }
}

</style>