<template>
  <div class="planner_configuration_area">
    <section class="planner_configuration_header">
        <h2 class="planner_configuration_header_name">Моя конфигурация</h2>
        <button class="planner_configuration_header_menu_button">
            <span class="material-symbols-outlined">more_vert</span>
        </button>
    </section>
    <section class="planner_configuration_meta_wrapper">
        <div class="planner_configuration_meta_image_container">
            <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
        </div>
        <ul class="planner_configuration_specification_wrapper">
            <li class="planner_configuration_specification_section">
                <h4 class="planner_configuration_specification_title">Корпус шкафа</h4>
                <dl class="planner_configuration_options_wrapper">
                    <dt class="planner_configuration_meta_key">Количество дверей</dt>
                    <dd class="planner_configuration_meta_value">2</dd>
                    <dt class="planner_configuration_meta_key">Размеры</dt>
                    <dd class="planner_configuration_meta_value">800×500×760 мм</dd>
                    <dt class="planner_configuration_meta_key">Схема наполнения</dt>
                    <dd class="planner_configuration_meta_value">Схема 4</dd>
                    <dt class="planner_configuration_meta_key">Цвет корпуса</dt>
                    <dd class="planner_configuration_meta_value">Бук бавария</dd>
                </dl>
            </li>
            <li class="planner_configuration_specification_section">
                <h4 class="planner_configuration_specification_title">Двери</h4>
                <dl class="planner_configuration_options_wrapper">
                    <dt class="planner_configuration_meta_key">Система дверей</dt>
                    <dd class="planner_configuration_meta_value">Система 1</dd>
                    <dt class="planner_configuration_meta_key">Профиль дверей</dt>
                    <dd class="planner_configuration_meta_value">Профиль 4</dd>
                    <dt class="planner_configuration_meta_key">Конфигурация дверей</dt>
                    <dd class="planner_configuration_meta_value_door">
                        <ul class="planner_configuration_door_configuration_wrapper">
                            <li class="planner_configuration_door_configuration">
                                <h5 class="planner_configuration_door_configuration_title">Дверь 1</h5>
                                <dl class="planner_configuration_door_meta">
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Количество раделителей</dt>
                                        <dd class="planner_configuration_door_meta_value">2</dd>
                                    </div>
                                </dl>
                                <h6 class="planner_configuration_door_configuration_material">Материал двери</h6>
                                <dl class="planner_configuration_door_meta">
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Секция 1</dt>
                                        <dd class="planner_configuration_door_meta_value">Дуб сонома</dd>
                                    </div>
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Секция 2</dt>
                                        <dd class="planner_configuration_door_meta_value">Бук Бавария</dd>
                                    </div>
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Секция 3</dt>
                                        <dd class="planner_configuration_door_meta_value">Зеркало</dd>
                                    </div>
                                </dl>
                            </li>
                            <li class="planner_configuration_door_configuration">
                                <h5 class="planner_configuration_door_configuration_title">Дверь 2</h5>
                                <dl class="planner_configuration_door_meta">
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Количество раделителей</dt>
                                        <dd class="planner_configuration_door_meta_value">1</dd>
                                    </div>
                                </dl>
                                <h6 class="planner_configuration_door_configuration_material">Материал двери</h6>
                                <dl class="planner_configuration_door_meta">
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Секция 1</dt>
                                        <dd class="planner_configuration_door_meta_value">Дуб сонома</dd>
                                    </div>
                                    <div>
                                        <dt class="planner_configuration_door_meta_key">Секция 2</dt>
                                        <dd class="planner_configuration_door_meta_value">Пескоструйный рисунок</dd>
                                    </div>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </li>
        </ul>
    </section>
    <section class="planner_configuration_total">
        <output class="planner_configuration_total_price">
            <span class="planner_configuration_total_price_description">Предварительная стоимость</span>
            <div class="planner_configuration_total_price_wrapper">
                <span class="planner_configuration_total_price_value">36 900 ₽</span>
            </div>
        </output>
        <div class="planner_configuration_total_complet_wrapper">
            <button class="planner_configuration_total_complet">
                Завершить планирование
            </button>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "Planner-Configuration",

}
</script>

<style>

.planner_configuration_meta_image_container {
    overflow: hidden;
    aspect-ratio: 3 / 2;
    margin-bottom: 16px;
}

.planner_configuration_meta_image_container img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.planner_configuration_meta_wrapper {
    grid-row: 2;
    padding: 16px;
    overflow-y: auto;
    overflow-x: hidden;
}

.planner_configuration_specification_wrapper {
    list-style: none;
}

.planner_configuration_specification_section {
    padding-bottom: 16px;
    border-bottom: 1px solid;
    margin-bottom: 16px;
}

.planner_configuration_specification_title {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 16px;
}

.planner_configuration_options_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 8px;
}

.planner_configuration_meta_key {
    grid-column: 1;
    font-size: 14px;
    line-height: 20px;
}

.planner_configuration_meta_value {
    grid-column: 2;
    font-size: 14px;
    line-height: 20px;
}

.planner_configuration_door_configuration_wrapper {
    list-style: none;
}

.planner_configuration_door_configuration {
    padding-bottom: 8px;
    border-bottom: 1px solid;
    margin-bottom: 8px;
}

.planner_configuration_door_configuration:last-child {
    padding-bottom: 0px;
    border-bottom: 0px;
    margin-bottom: 0px;
}

.planner_configuration_door_configuration_title {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 16px;
}

.planner_configuration_door_configuration_title:first-child {
    margin-top: 0px;
}

.planner_configuration_door_meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.planner_configuration_door_meta_key {
    display: inline;
    font-size: 14px;
    line-height: 20px;
}

.planner_configuration_door_meta_key::after {
  content: ': ';
}

.planner_configuration_door_meta_value {
    display: inline;
    font-size: 14px;
    line-height: 20px;
}

.planner_configuration_door_configuration_material {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 8px;
}





.planner_configuration_area {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    height: 100%;
    width: 100%;
}

.planner_configuration_header {
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 1px solid;
}

.planner_configuration_header_name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin: 0px;
}

.planner_configuration_header_menu_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-right: -8px;
}

.planner_configuration_total {
    grid-row: 3;
    background-color: #FFFFFF;
    padding: 16px;
    border-top: 1px solid;
    width: 100%;
}

.planner_configuration_total_price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;
}

.planner_configuration_total_price_description {
    font-size: 12px;
    line-height: 16px;
}

.planner_configuration_total_price_wrapper {
    display: flex;
    align-items: center;
}

.planner_configuration_total_price_value {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
}

.planner_configuration_total_complet_wrapper {
    display: flex;
    justify-content: end;
}

.planner_configuration_total_complet {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
    padding: 10px 24px 10px 24px;
    font-family: 'Golos ui', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #000000;
    border-radius: 100px;
}



</style>