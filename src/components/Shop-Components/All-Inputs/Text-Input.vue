<template>
      <div class="text_input_container">
        <input class="text_input" type="type" id="baseinput" placeholder=" ">
        <label class="text_input_label" for="baseinput">{{ InputLabelName }}</label>
      </div>
</template>

<script>
export default {
    name: "Text_Input",
    props: ['InputLabelName'],

}
</script>

<style>

.text_input_container {
    position: relative;
    display: flex;
    flex-direction: column;
}

.text_input_label {
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    pointer-events: none;
    transform-origin: 0 50%;
    transition: transform 200ms;
}

.text_input {
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 8px;
    border: 1px solid;
    border-radius: 8px;
}

.text_input:focus ~ .text_input_label, 
.text_input:not(:placeholder-shown) ~ .text_input_label {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    transform: translateY(-16px);
}

</style>