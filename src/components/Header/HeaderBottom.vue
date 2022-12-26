<template>
  <div class="the_bottom_menu">
    <menu-catalog/>
    <menu-main/>
  </div>
</template>

<script>

    import MenuCatalog from "./TheCatalog/MenuCatalog.vue";
    import MenuMain from "./TheCatalog/MenuMain.vue";

export default {
    name: "HeaderBottom",
    components: {
        MenuCatalog,
        MenuMain,
  }
}
</script>

<style>
.the_bottom_menu {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-bottom: 1px solid var(--outline-light);
  padding-left: 24px;
  padding-right: 24px;
  background-color: #ffffff;
}

@media (max-width: 1239px) {
  .the_bottom_menu {
  display: flex;
  border-top: 1px solid;
  border-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  }
}

</style>