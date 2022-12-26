<template>
<div class="planner_step_area_wrapper">
  <fieldset class="planner_step_area">
    <legend class="planner_step_title">Выберете количество дверей</legend>
        <planner-step-radio-input/>
        <planner-step-radio-input/>
        <planner-step-radio-input/>
        <planner-step-radio-input/>
        <planner-step-radio-input/>
        <planner-step-radio-input/>
  </fieldset>
  <fieldset class="planner_step_area">
    <legend class="planner_step_title">Конфигурация дверного полотна</legend>
        <planner-step-door/>
  </fieldset>
  <fieldset class="planner_step_area">
    <legend class="planner_step_title">Дополнительные элементы</legend>
        <planner-step-check-input/>
        <planner-step-check-input/>
        <planner-step-check-input/>
        <planner-step-check-input/>
        <planner-step-check-input/>
        <planner-step-check-input/>
  </fieldset>
  </div>
</template>

<script>
import PlannerStepRadioInput from './Planner-Step-Radio-Input.vue'
import PlannerStepDoor from './Planner-Step-Door.vue'
import PlannerStepCheckInput from './Planner-Step-Check-Input.vue'
export default {
    name: "Planner-Step",
    components: {
        PlannerStepRadioInput,
        PlannerStepDoor,
        PlannerStepCheckInput,
    },

}
</script>

<style>

.planner_step_area_wrapper {
    margin-bottom: 40px;
}

.planner_step_area {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-row-gap: 16px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 32px;
}

.planner_step_title {
    grid-column: span 12;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 32px;
    margin-left: 16px;
}

</style>