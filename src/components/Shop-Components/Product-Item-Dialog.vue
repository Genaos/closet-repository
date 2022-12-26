<template>
    <dialog class="product_item_dialog" id="myDialog">
        <div class="product_item_dialog_header">
            <span class="product_item_dialog_name">Выберете цвет</span>
            <button type="button" onclick="myDialog.close();" class="product_item_dialog_close_button">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <form class="product_item_dialog_form">
      <fieldset class="product_item_dialog_form_wrapper">
        <label class="product_item_dialog_radio_input_wrapper">
            <div class="product_item_dialog_radio_input_meta">
                <div class="product_item_dialog_radio_input_image">
                    <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="product_item_dialog_radio_input_name">Бук бавария</span>
                <span class="product_item_dialog_radio_input_description">+ 3890 ₽</span>
            </div>
            <div class="product_item_dialog_radio_input_container">
                <input class="product_item_dialog_radio_input" type="radio" name="colorproduct">
            </div>
        </label>
        <label class="product_item_dialog_radio_input_wrapper">
            <div class="product_item_dialog_radio_input_meta">
                <div class="product_item_dialog_radio_input_image">
                    <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="product_item_dialog_radio_input_name">Бук бавария</span>
                <span class="product_item_dialog_radio_input_description">+ 3890 ₽</span>
            </div>
            <div class="product_item_dialog_radio_input_container">
                <input class="product_item_dialog_radio_input" type="radio" name="colorproduct">
            </div>
        </label>
        <label class="product_item_dialog_radio_input_wrapper">
            <div class="product_item_dialog_radio_input_meta">
                <div class="product_item_dialog_radio_input_image">
                    <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="product_item_dialog_radio_input_name">Бук бавария</span>
                <span class="product_item_dialog_radio_input_description">+ 3890 ₽</span>
            </div>
            <div class="product_item_dialog_radio_input_container">
                <input class="product_item_dialog_radio_input" type="radio" name="colorproduct">
            </div>
        </label>
        <label class="product_item_dialog_radio_input_wrapper">
            <div class="product_item_dialog_radio_input_meta">
                <div class="product_item_dialog_radio_input_image">
                    <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="product_item_dialog_radio_input_name">Бук бавария</span>
                <span class="product_item_dialog_radio_input_description">+ 3890 ₽</span>
            </div>
            <div class="product_item_dialog_radio_input_container">
                <input class="product_item_dialog_radio_input" type="radio" name="colorproduct">
            </div>
        </label>
        <label class="product_item_dialog_radio_input_wrapper">
            <div class="product_item_dialog_radio_input_meta">
                <div class="product_item_dialog_radio_input_image">
                    <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                </div>
                <span class="product_item_dialog_radio_input_name">Бук бавария</span>
                <span class="product_item_dialog_radio_input_description">+ 3890 ₽</span>
            </div>
            <div class="product_item_dialog_radio_input_container">
                <input class="product_item_dialog_radio_input" type="radio" name="colorproduct">
            </div>
        </label>
      </fieldset>
        </form>
    </dialog>

</template>

<script>
export default {
        name: "Product-Item-Dialog",

}
</script>

<style>

.product_item_dialog {
    position: sticky;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 0;
    border: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
}

.product_item_dialog_header {
    position: sticky;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    padding-left: 16px;
    padding-right: 32px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid;
}

.product_item_dialog_name {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
}

.product_item_dialog_close_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
}

.product_item_dialog_form {
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 24px;
    margin-bottom: 32px;
}


.product_item_dialog_form_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
}

.product_item_dialog_radio_input_wrapper {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    border: 1px solid;
}



.product_item_dialog_radio_input_image {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin-bottom: 16px;
}

.product_item_dialog_radio_input_image img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.product_item_dialog_radio_input_meta {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.product_item_dialog_radio_input_name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.product_item_dialog_radio_input_description {
  font-size: 14px;
  line-height: 20px;
}

.product_item_dialog_radio_input_container {
    display: flex;
    align-self: end;
}

.product_item_dialog_radio_input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0px;
  width: 24px;
  height: 24px;
}

.product_item_dialog_radio_input::after {
  font-family: 'Material Symbols Outlined';
  content: 'radio_button_unchecked';
  font-variation-settings: 'wght' 400, 'opsz' 24;
  font-size: 24px;
  line-height: 1;
}


.product_item_dialog_radio_input:hover::after {
  font-variation-settings: 'wght' 700;
}

.product_item_dialog_radio_input:checked::after {
  font-family: 'Material Symbols Outlined';
  content: 'radio_button_checked';
  font-size: 24px;
  line-height: 1;
}

.product_item_dialog_radio_input:checked:hover::after {
  font-variation-settings: 'wght' 700;
}

</style>