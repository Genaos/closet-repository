<template>
  <div class="planner_step_door_wrapper">
    <div class="planner_step_door_image">
        <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
    </div>
    <div class="planner_step_door_controls_wrapper">
        <h3 class="planner_step_door_controls_title">Дверь 1</h3>
        <div class="planner_step_door_divide_wrapper">
            <div class="planner_step_door_divide_title_wrapper">
                <h4 class="planner_step_door_divide_title">Разделители</h4>
                <button class="planner_step_door_divide_info">
                    <span class="material-symbols-outlined size_20">info</span>
                </button>
            </div>
            <p class="planner_step_door_divide_description">Укажите количество разделителей для этой двери</p>
            <select class="planner_step_door_divide_select" name="door-divide" id="door-divide">
                <option value="0" selected>Без разделителей</option>
                <option value="2">1 разделитель</option>
                <option value="3">2 разделителя</option>
            </select>
        </div>
        <div class="planner_step_door_material_wrapper">
            <h4 class="planner_step_door_material_title">Материал Двери</h4>
            <p class="planner_step_door_material_description">Выберете материал для каждой из секций</p>
            <button class="planner_step_door_choice_button">
                <div class="planner_step_door_choice_button_meta_wrapper">
                    <div class="planner_step_door_choice_button_image">
                        <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                    </div>
                    <div class="planner_step_door_choice_button_meta">
                        <span class="planner_step_door_choice_button_head">Секция 1</span>
                        <span class="planner_step_door_choice_button_value">Дуб сонома</span>
                    </div>
                </div>
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
            <button class="planner_step_door_choice_button">
                <div class="planner_step_door_choice_button_meta_wrapper">
                    <div class="planner_step_door_choice_button_image">
                    
                    </div>
                    <div class="planner_step_door_choice_button_meta">
                        <span class="planner_step_door_choice_button_head">Секция 1</span>
                        <span class="planner_step_door_choice_button_value">Выберете материал</span>
                    </div>
                </div>
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Planner-Step-Door",

}
</script>

<style>
.planner_step_door_wrapper {
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    background-color: #ffffff;
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
}

.planner_step_door_image {
    grid-column: span 4;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin-bottom: 16px;
}

.planner_step_door_image img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.planner_step_door_controls_wrapper {
    grid-column: 5 / span 8;
}

.planner_step_door_controls_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-top: 0px;
    margin-bottom: 24px;
}

.planner_step_door_divide_wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin-bottom: 48px;
}

.planner_step_door_divide_title_wrapper {
    grid-column: span 8;
    display: flex;
    align-items: center;
}

.planner_step_door_divide_title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
}

.planner_step_door_divide_info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
}

.planner_step_door_divide_description {
    grid-column: span 8;
    font-size: 14px;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 16px;
}

.planner_step_door_divide_select {
    grid-column: span 6;
    font-family: 'Golos Ui', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid;
}




.planner_step_door_material_title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding-bottom: 4px;    
}

.planner_step_door_material_description {
    font-size: 14px;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 16px;    
}

.planner_step_door_choice_button {
    width: 100%;
    min-height: 72px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 12px;
    margin-bottom: 16px;
}

.planner_step_door_choice_button:last-child {
    margin-bottom: 0px;
}

.planner_step_door_choice_button_meta_wrapper {
    display: flex;
    gap: 16px;
    align-items: center;
}

.planner_step_door_choice_button_image {
    overflow: hidden;
    width: 48px;
    height: 48px;
    border-radius: 100px;
}

.planner_step_door_choice_button_image img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.planner_step_door_choice_button_meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.planner_step_door_choice_button_head {
    display: flex;
    font-family: 'Golos ui', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
}

.planner_step_door_choice_button_value {
    font-family: Golos ui, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;     
}

</style>