<template>
    <div class="header_top_wrapper">
    <ul class="header_top_list">
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/about">О нас</router-link>
      </li>
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/contacts"
          >Контакты</router-link
        >
      </li>
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/services"
          >Установка</router-link
        >
      </li>
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/services">Замеры</router-link>
      </li>
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/partners"
          >Партнерам</router-link
        >
      </li>
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/photos"
          >Фото работ</router-link
        >
      </li>
      <li class="header_top_list_input">
        <router-link class="header_top_link" to="/posts">Блог</router-link>
      </li>
    </ul>
    <div class="header_top_contact_wrapper">
      <a class="phone_link" href="/">+7 999 987 78 89</a>
      <div class="phone_info">
        <span class="material-symbols-outlined size">info</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HeaderTop",
}
</script>

<style>
.header_top_wrapper {
  display: flex;
  background: var(--surface-dark);
  padding-left: 40px;
  padding-right: 40px;
  overflow-y: auto;
  overflow-x: hidden;
}

.header_top_list {
  display: flex;
  list-style: none;
  margin-top: 4px;
  margin-bottom: 4px;
}

.header_top_list_input {
  display: flex;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  margin-right: 8px;
}

.header_top_list_input:last-child {
  margin-right: 0px;
}

.header_top_link {
  color: var(--on-surface-dark);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.header_top_contact_wrapper {
  position: absolute;
  right: 34px;
  top: 4px;
  z-index: 2;
  display:flex;
  justify-content: center;
  align-items: center;

}

.phone_link {
  text-decoration: none;
  color: var(--on-surface-variant-dark);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: right;
}

.phone_info {
  display: flex;
  color: var(--on-surface-variant-dark);
  padding: 6px;
  border-radius: 100px;
}

.size {
  font-size: 20px;
  font-variation-settings: 'OPSZ' 20;
}


@media (max-width: 1239px) {
  .header_top_wrapper {
    width: 320px;
    height: 100%;
    padding: 16px;
  }

  .header_top_list {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }

  .header_top_list_input {
    border-radius: 8px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    text-align: left;
    margin-right: 0;
  }

  .header_top_contact_wrapper {
    display: none;
  }
}
</style>