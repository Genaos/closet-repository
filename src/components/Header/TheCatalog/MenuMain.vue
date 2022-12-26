<template>
    <div class="main_menu_wrapper">
      <ul class="main_menu">
        <li class="main_menu_item">
          <router-link class="main_menu_item_link" to="/about">Шкафы-купе<span class="material-symbols-outlined">expand_more</span></router-link>
        </li>
        <li class="main_menu_item">
          <router-link class="main_menu_item_link" to="/contacts"
            >Контакты</router-link
          >
        </li>
        <li class="main_menu_item">
          <router-link class="main_menu_item_link" to="/services"
            >Установка</router-link
          >
        </li>
        <li class="main_menu_item">
          <router-link class="main_menu_item_link" to="/services">Замеры</router-link>
        </li>
        <li class="main_menu_item">
          <router-link class="main_menu_item_link" to="/partners"
            >Партнерам</router-link
          >
        </li>
      </ul>
      <ul class="header_bottom_bar_wrapper">
        <li class="header_bottom_bar_item">
          <a href="/">
            <span class="material-symbols-outlined">shopping_cart</span
            ><span class="header_bottom_bar_item_lnk">Корзина</span>
          </a>
        </li>
        <li class="header_bottom_bar_item">
          <a href="/">
            <span class="material-symbols-outlined">favorite</span
            ><span class="header_bottom_bar_item_lnk">Избранное</span>
          </a>
        </li>
        <li class="header_bottom_bar_item">
          <router-link to="/login">
            <span class="material-symbols-outlined">person</span
            ><span class="header_bottom_bar_item_lnk">Войти</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: "MenuMain",
}
</script>

<style>
.main_menu_wrapper {
  grid-column: span 10;
}

.main_menu {
  grid-template-columns: repeat(10, 1fr);
  display: grid;
  list-style: none;
}

.main_menu_item {
  grid-column: span 2;
  border-right: 1px solid var(--outline-light);
}

.main_menu_item:last-child {
  border-right: 0px;
  margin-right: -24px;
}

.main_menu_item:last-child a {
  border-right: 0px;
  padding-right: 24px;
}

.main_menu_item_link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 19px;
  color: var(--on-surface-light);
}



.header_bottom_bar_wrapper {
  display: flex;
  list-style: none;
  display: none;
}

.header_bottom_bar_item {
  flex: 1;
}

.header_bottom_bar_item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
}

.header_bottom_bar_item_lnk {
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
}



@media (max-width: 1239px) {
  .main_menu {
    display: none;
  }
  .main_menu_wrapper {
    flex: 3;
  }
  .header_bottom_bar_wrapper {
    display: flex;
  }
}

</style>