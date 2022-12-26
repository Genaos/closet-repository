<template>
  <nav style="TheHeader_Wrapper">
    <div class="Top_Wrapper">
        <header-Top/>
    </div>
    <div class="Middle_Wrapper">
        <header-middle/>
    </div>
    <div class="Bottom_Wrapper">
        <header-bottom/>
    </div>
  </nav>
</template>

<script>

    import HeaderTop from "./Header/HeaderTop.vue";
    import HeaderMiddle from "./Header/HeaderMiddle.vue";
    import HeaderBottom from "./Header/HeaderBottom.vue";

export default {
    name: "TheHeader",
    components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom,
  }
}
</script>

<style>

@media (max-width: 1239px) {
  .Bottom_Wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
  }

  .Top_Wrapper {
    display: none;
  }
}

</style>