<template>
    <label class="planner_step_check_input_wrapper">
        <div class="planner_step_check_input_meta">
            <div class="planner_step_check_input_image">
                <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
            </div>
            <span class="planner_step_check_input_name">Ящик выдвижной прямой</span>
            <span class="planner_step_check_input_description">4890 ₽</span>
        </div>
        <div class="planner_step_check_input_container">
            <input class="planner_step_check_input" type="checkbox" name="configuration">
        </div>
    </label>
</template>

<script>
export default {
    name: "Planner-Step-check-Input",

}
</script>

<style>

.planner_step_check_input_wrapper {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    margin-right: 12px;
}

.planner_step_check_input_image {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin-bottom: 16px;
}

.planner_step_check_input_image img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.planner_step_check_input_meta {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.planner_step_check_input_name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.planner_step_check_input_description {
  font-size: 14px;
  line-height: 20px;
}

.planner_step_check_input_container {
    display: flex;
    align-self: end;
}

.planner_step_check_input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0px;
  width: 24px;
  height: 24px;
}

.planner_step_check_input::after {
  font-family: 'Material Symbols Outlined';
  content: 'check_box_outline_blank';
  font-variation-settings: 'wght' 400, 'opsz' 24;
  font-size: 24px;
  line-height: 1;
}


.planner_step_check_input:hover::after {
  font-variation-settings: 'wght' 700;
}

.planner_step_check_input:checked::after {
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 1;
  content: 'check_box';
  font-size: 24px;
  line-height: 1;
}

.planner_step_check_input:checked:hover::after {
  font-variation-settings: 'wght' 700, 'FILL' 1;
}

</style>