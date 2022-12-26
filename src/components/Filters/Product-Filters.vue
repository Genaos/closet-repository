<template>
  <div class="Product_Filters_Wrapper">
    <div class="Products_Filters_Header">
        <h3 class="Products_Filters_Header_Name">Фильтры</h3>
          <select class="products_filter_select" name="city" id="city-select">
                <option value="popular" selected>По популярности</option>
                <option value="priceup">По возрастанию цены</option>
                <option value="pricedown">По убыванию цены</option>
          </select>
    </div>
    <ul class="Product_Filters_List">
        <li class="Product_Filters_List_Input">
            <button class="Product_Filters_List_Input_Head">
                <div class="Product_Filters_List_Input_Head_Meta">
                    <span class="Product_Filters_List_Input_Head_Name">Цвет</span>
                </div>
                <span class="material-symbols-outlined">expand_more</span>
            </button>
            <div class="Product_Filters_List_Input_Area">
                <label class="Product_Filters_Check_Area">
                    <input class="check_input" type="checkbox" name="color">
                    <span class="check_label">Красный</span>
                </label>
                <label class="Product_Filters_Check_Area">
                    <input class="check_input" type="checkbox" name="color">
                    <span class="check_label">Красный</span>
                </label>
                <label class="Product_Filters_Check_Area">
                    <input class="check_input" type="checkbox" name="color">
                    <span class="check_label">Красный</span>
                </label>
                <label class="Product_Filters_Check_Area">
                    <input class="check_input" type="checkbox" name="color">
                    <span class="check_label">Красный</span>
                </label>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Product-Filters",

}
</script>

<style>
.Product_Filters_Wrapper {
    display: flex;
    flex-direction: column;
}

.Products_Filters_Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid;
    width: 100%;
    min-height: 65px;
}

.Products_Filters_Header_Name {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
}

.products_filter_select {
    font-family: 'Golos Ui', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    border: 0;
}

.Product_Filters_List {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
}

.Product_Filters_List_Input {
    border-bottom: 1px solid;
}

.Product_Filters_List_Input_Head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 40px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
}

.Product_Filters_List_Input_Head_Meta {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.Product_Filters_List_Input_Head_Name {
    font-family: 'Golos Ui', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-top: 4px;
    padding-bottom: 4px;
}

.Product_Filters_List_Input_Area {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    padding-bottom: 28px;
}

.Product_Filters_Check_Area {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 40px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
}

.check_input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0px;
  width: 24px;
  height: 24px;
}

.check_input::before {
  font-family: 'Material Symbols Outlined';
  content: 'check_box_outline_blank';
  font-variation-settings: 'wght' 400, 'opsz' 24;
  font-size: 24px;
  line-height: 1;
}


.check_input:hover::before {
  font-variation-settings: 'wght' 700;
}

.check_input:checked::before {
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 1;
  content: 'check_box';
  font-size: 24px;
  line-height: 1;
}

.check_input:checked:hover::before {
  font-variation-settings: 'wght' 700, 'FILL' 1;
}

.check_label {
    font-size: 16px;
    line-height: 24px;
    padding-left: 16px;
}
</style>