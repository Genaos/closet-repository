<template>
  <div class="planner_stepper_area">
    <svg width="4" height="582" viewBox="0 0 4 582" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect id="progress_value" width="4" height="582" rx="2" fill="#9EC4E8"/>
    </svg>
    <ol class="planner_stepper_wrapper">
        <li class="planner_stepper_wrapper_section">
            <span class="planner_stepper_section_title">Корпус шкафа</span>
            <ol class="planner_stepper_list_wrapper">
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">1</span>
                        </div>
                        <span class="planner_stepper_step_name">Количество дверей</span>
                    </a>
                </li>
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">2</span>
                        </div>
                        <span class="planner_stepper_step_name">Размеры</span>
                    </a>
                </li>
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">3</span>
                        </div>
                        <span class="planner_stepper_step_name">Схема наполнения</span>
                    </a>
                </li>
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">4</span>
                        </div>
                        <span class="planner_stepper_step_name">Цвет корпуса</span>
                    </a>
                </li>
            </ol>
        </li>
        <li class="planner_stepper_wrapper_section">
            <span class="planner_stepper_section_title">Двери</span>
            <ol start="5" class="planner_stepper_list_wrapper">
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">5</span>
                        </div>
                        <span class="planner_stepper_step_name">Система дверей</span>
                    </a>
                </li>
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">6</span>
                        </div>
                        <span class="planner_stepper_step_name">Профиль дверей</span>
                    </a>
                </li>
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">7</span>
                        </div>
                        <span class="planner_stepper_step_name">Конфигурация дверей</span>
                    </a>
                </li>
            </ol>
        </li>
        <li class="planner_stepper_wrapper_section">
            <span class="planner_stepper_section_title">Комплектация</span>
            <ol start="8" class="planner_stepper_list_wrapper">
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">8</span>
                        </div>
                        <span class="planner_stepper_step_name">Комплектация корпуса</span>
                    </a>
                </li>
                <li class="planner_stepper_list_item">
                    <a class="planner_stepper_step">
                        <div class="planner_stepper_step_value_wrapper">
                            <span class="planner_stepper_step_value">9</span>
                        </div>
                        <span class="planner_stepper_step_name">Дополнительные элементы</span>
                    </a>
                </li>
            </ol>
        </li>
    </ol>
  </div>
</template>

<script>
export default {
    name: "Planner-Stepper",

}
</script>

<style>

.planner_stepper_area {
    display: flex;
    width: 100%;
    padding-top: 32px;
    padding-left: 16px;
}

.planner_stepper_wrapper {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
}

.planner_stepper_wrapper_section {
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;
}

.planner_stepper_wrapper_section:last-child {
    margin-bottom: 0px;
}

.planner_stepper_section_title {
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin-left: 16px;
    margin-bottom: 14px;
}

.planner_stepper_list_wrapper {
    display: flex;
    flex-direction: column;
    list-style: none;
}

.planner_stepper_list_item {
    display: flex;
    flex-direction: column;
}

.planner_stepper_step {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    padding-top: 12px;
    padding-left: 16px;
    padding-bottom: 12px;
}

.planner_stepper_step_value_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid;
    border-radius: 100px;
}

.planner_stepper_step_value {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
}

.planner_stepper_step_name {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-left: 12px;
}


</style>