<template>
        <div v-if="isOpen" class="all_product_category_open_wrapper">
          <div class="all_product_category_open_header">
            meta
          </div>
          <ul class="all_product_category_open_list">
            <li class="all_product_category_open_list_item">
              <a class="all_product_category_open_list_product" href="#">
                <div class="all_product_category_open_list_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span>Meta</span>
              </a>
            </li>
            <li class="all_product_category_open_list_item">
              <a class="all_product_category_open_list_product" href="#">
                <div class="all_product_category_open_list_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span>Meta</span>
              </a>
            </li>
            <li class="all_product_category_open_list_item">
              <a class="all_product_category_open_list_product" href="#">
                <div class="all_product_category_open_list_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span>Meta</span>
              </a>
            </li>
          </ul>
          <a class="all_product_category_open_all">Все товары</a>
      </div>
</template>

<script>
export default {
    name: "SubSideCatalogMenu",

  props: {
    isOpen: {
    type: Boolean,
    },
  },

  emits: {
    close: null,
  },

  methods: {

    close() {
      this.$emit("close");
    },
  }

}
</script>

<style>
.all_product_category_open_wrapper {
  display: grid;
  grid-template-rows: minmax(64px, max-content);
  grid-auto-rows: max-content;
  position: fixed;
  top: 0;
  right: 0;
  left: 380px;
  z-index: 101;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #F8F8F8;
}

.all_product_category_open_header {
  grid-row: 1;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  padding-left: 16px;
  padding-right: 40px;
  border-bottom: 1px solid;
}

.all_product_category_open_list {
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-column-gap: 32px;
  grid-auto-rows: max-content;
  grid-row-gap: 32px;
  list-style: none;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  overflow-y: auto;
  overflow-x: hidden;
}

.all_product_category_open_list_item {
  grid-column: span 3;
}

.all_product_category_open_list_product {
  display: flex;
  flex-direction: column;
}

.all_product_category_open_list_image {
  overflow: hidden;
  aspect-ratio: 4 / 2;
  margin-bottom: 16px;
}

.all_product_category_open_list_image img {
  width: 100%;
  object-fit: cover;
}

.all_product_category_open_all {
  grid-row: 3;
  margin-top: 32px;
}
</style>