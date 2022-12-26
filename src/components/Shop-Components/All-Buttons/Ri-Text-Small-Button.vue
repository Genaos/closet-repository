<template>
    <button class="ri_text_small_button">
        <span class="material-symbols-outlined size_20"><slot name="icon"></slot></span>
        <span class="ri_text_small_button_text"><slot name="text"></slot></span>
    </button>
</template>

<script>

export default {

    name: "Ri-Text-Small-Button",

}
</script>

<style>
.ri_text_small_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 12px 10px 12px;
    color: var(--primary-light);
    border-radius: 100px;
}

.ri_text_small_button_text {
    font-family: 'Golos ui', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    padding-left: 8px;
}

.ri_text_small_button.filled_button_icon .material-symbols-outlined {
  font-variation-settings: 'FILL' 1;
}
</style>