<template>
  <button class="men_catalog" @click="openSideCatalogMenu">
    <span class="material-symbols-outlined">widgets</span><span class="men_catalog_text">Каталог</span>
  </button>
    <SideCatalogMenu
    :is-open="isSideCatalogMenuOpen"
    @close="isSideCatalogMenuOpen = false"
    >
    </SideCatalogMenu>
</template>

<script>
import SideCatalogMenu from './SideCatalogMenu.vue';


export default {
    name: "MenuCatalog",
      components: {
      SideCatalogMenu,
    },
    data() {
      return { isSideCatalogMenuOpen: false };
    },
    methods: {
      openSideCatalogMenu() {
        this.isSideCatalogMenuOpen = true;
      }
    },
}
</script>

<style>
.men_catalog {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 20px;
  padding-bottom: 19px;
  padding-left: 24px;
  margin-left: -24px;
  padding-right: 0px;
  border-right: 1px solid var(--outline-light);
  background-color: var(--primary-container-light);
  color: var(--on-primary-container-light);
}

.men_catalog_text {
  font-family: 'Golos Ui', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
}

@media (max-width: 1239px) {
  .men_catalog {
  flex: 1;
  flex-direction: column;
  border-right: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 0;
  padding-left: 0;
  margin-left: 0;
  }

  .men_catalog_text {
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  }
}
</style>