<template>
    <button class="icon_small_button">
        <span class="material-symbols-outlined size_20"><slot></slot></span>
    </button>
</template>

<script>

export default {

    name: "Icon-Small-Button",

}
</script>

<style>

.icon_small_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
}

</style>