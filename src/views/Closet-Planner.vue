<template>
  <div class="closet_planner_area">
    <aside class="closet_planner_stepper_wrapper">
        <planner-stepper/>
    </aside>
    <form class="closet_planner_value_selection_wrapper">
        <planner-step/>
    </form>
    <div class="closet_planner_configuration_wrapper">
        <planner-configuration/>
    </div>
    <div class="closet_planner_controls_wrapper">
         <button class="closet_planner_back_button">
            <span class="material-symbols-outlined size_20">arrow_back</span>
            <span class="closet_planner_controls_button_text">Назад</span>
        </button>
        <button class="closet_planner_forward_button">
            <span class="closet_planner_controls_button_text">Далее</span>
            <span class="material-symbols-outlined size_20">arrow_forward</span>
        </button>
    </div>
  </div>
</template>

<script>
import PlannerConfiguration from '../components/Planner/Planner-Configuration.vue'
import PlannerStep from '../components/Planner/Planner-Step.vue'
import PlannerStepper from '../components/Planner/Planner-Stepper.vue'

export default {
    name: "Closet-Planner",
    components: {
        PlannerStepper,
        PlannerConfiguration,
        PlannerStep,
    },
}
</script>

<style>

.closet_planner_area {
    display: grid;
    grid-template-columns: 320px 1fr 380px;
    background-color: #F0F0F0;
}

.closet_planner_stepper_wrapper {
    grid-column: 1;
    position: sticky;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.closet_planner_value_selection_wrapper {
    grid-column: 2;
}

.closet_planner_controls_wrapper {
    position: fixed;
    bottom: 16px;
    right: 404px;
    display: flex;
    gap: 8px;
}

.closet_planner_forward_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #ffffff;
    padding: 10px 16px 10px 24px;
    color: #000000;
    border-radius: 100px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
}

.closet_planner_back_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #f0f0f0;
    padding: 10px 24px 10px 16px;
    color: #000000;
    border-radius: 100px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
}

.closet_planner_controls_button_text {
    font-family: 'Golos ui', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
}

.closet_planner_configuration_wrapper {
    grid-column: 3;
    position: sticky;
    right: 0;
    top: 0;
    height: 100vh;
    border-left: 1px solid;
    background-color: #FFFFFF;
}


</style>