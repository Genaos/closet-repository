<template>
      <div v-if="isOpen" @click="close" class="all_products_wrapper">
        <div @click.stop class="all_products_list_wrapper">
        <div class="all_products_list_header">
          <div @click="close" class="icon_button_close">
            <span class="material-symbols-outlined">close</span>
          </div>
          <h2 class="all_products_list_title">Каталог</h2>
        </div>
        <ul class="all_products_list">
          <li class="all_pruducts_list_item_wrapper">
            <a @click="openSubSideCatalogMenu" class="all_pruducts_list_item">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
          <li class="all_pruducts_list_item_wrapper">
            <a class="all_pruducts_list_item" href="#">
              <div class="all_pruducts_list_item_image_meta">
                <div class="all_pruducts_list_item_image">
                  <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="all_pruducts_list_item_name">Категория</span>
              </div>
              <span class="material-symbols-outlined">chevron_right</span>
            </a>
          </li>
        </ul>
        </div>
      </div>
</template>

<script>

export default {
    name: "SideCatalogMenu",
    components: {
    
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
.all_products_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
}

.all_products_list_wrapper {
  z-index: 101;
  width: 380px;
  display: grid;
  grid-template-rows: 64px 1fr;
  list-style: none;
  background-color: #FFFFFF;
  border-right: 1px solid;
  height: 100%;
}

.all_products_list_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
  padding-left: 32px;
  padding-top: 12px;
  padding-right: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--outline-light);
}

.all_products_list_title {
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: var(--on-surface-light);
}

.icon_button_close {
  display: flex;
  padding: 8px;
  border-radius: 100px;
  color: var(--on-surface-light);
}

.all_products_list {
  display: grid;
  grid-auto-rows: minmax(72px, max-content);
  list-style: none;
  padding-bottom: 24px;
  overflow-y: auto;
  overflow-x: hidden;
}

.all_pruducts_list_item_wrapper {
  border-bottom: 1px solid var(--outline-light);
}

.all_pruducts_list_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: var(--on-surface-light);
  padding-left: 40px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
}

.all_pruducts_list_item_name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.all_pruducts_list_item_image_meta {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.all_pruducts_list_item_image {
  overflow: hidden;
  width: 56px;
  aspect-ratio: 1 / 1;
  margin-right: 16px;
  border-radius: 8px;
}

.all_pruducts_list_item_image img {
  height: 100%;
  object-fit: cover;
}


@media (max-width: 1239px) {
  .all_products_wrapper {
    bottom: 73px;
  }

  .all_products_list_header {
    padding-left: 24px;
  }

  .all_pruducts_list_item {
    padding-left: 32px;
  }
}

@media (max-width: 904px) {

  .all_products_list_wrapper {
    width: 100vw;
  }

  .all_products_list_header {
    padding-left: 16px;
  }

  .all_pruducts_list_item {
    padding-left: 16px;
  }
}


</style>

