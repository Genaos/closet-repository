<template>
  <div class="personal_area_wrapper">
    <div class="personal_area_menu_wrapper">
        <div class="pesonal_area_header">
            <h1 class="pesonal_area_headline">Личный кабинет</h1>
            <span class="pesonal_area_name">Владислав</span>
        </div>
        <ul class="personal_area_menu">
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">manage_accounts</span>
                        <span class="personal_area_menu_item_meta_name">Мои данные</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">package</span>
                        <span class="personal_area_menu_item_meta_name">Мои заказы</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">favorite</span>
                        <span class="personal_area_menu_item_meta_name">Избранное</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <span class="personal_area_menu_item_meta_name">Корзина</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">playlist_add</span>
                        <span class="personal_area_menu_item_meta_name">Списки сравнения</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">design_services</span>
                        <span class="personal_area_menu_item_meta_name">Мои конфигурации</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <a class="personal_area_menu_item">
                    <div class="personal_area_menu_item_meta">
                        <span class="material-symbols-outlined">support_agent</span>
                        <span class="personal_area_menu_item_meta_name">Помощь</span>
                    </div>
                    <span class="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
            <li class="personal_area_menu_item_wrapper">
                <button class="personal_area_menu_item_exit">
                    <span class="personal_area_menu_item_exit_text">Выйти</span>
                </button>
            </li>
        </ul>
    </div>
    <div class="personal_area_content_wrapper">
    </div>
  </div>
</template>

<script>
export default {
    name: "Personal-Area",

}
</script>

<style>

.personal_area_wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-left: 24px;
    padding-right: 24px;
}

.personal_area_menu_wrapper {
  grid-column: span 3;
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-right: 1px solid;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: -24px;
  padding-bottom: 64px;
}

.pesonal_area_header {
    background-color: #F2EFEB;
    padding-left: 40px;
    padding-top: 24px;
    padding-right: 16px;
    padding-bottom: 24px;
    border-bottom: 1px solid;
}

.pesonal_area_headline {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 4px;
    margin: 0;
}

.pesonal_area_name {
    font-family: 'Akrobat', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
}

.personal_area_menu {
    display: flex;
    flex-direction: column;
    list-style: none;
}

.personal_area_menu_item_wrapper{
    border-bottom: 1px solid;
}

.personal_area_menu_item_wrapper:last-child {
    border-bottom: 0px;
}


.personal_area_menu_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
}

.personal_area_menu_item_meta {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.personal_area_menu_item_meta_name {
    padding-left: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.personal_area_menu_item_exit {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Golos ui', sans-serif;
  padding-left: 40px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  width: 100%;
}

.personal_area_menu_item_exit_text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.personal_area_content_wrapper {
    grid-column: 4 / span 9;
}

</style>