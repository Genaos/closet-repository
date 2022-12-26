<template>
<div>
    <div class="product_page_meta_wrapper">
        <div class="product_page_headline_container">
            <h1 class="product_page_headline">Отдельностоящие шкафы-купе</h1>
        </div>
    </div>
    <div class="product_page_variants_warpper">
        <div class="product_page_tabs_wrapper">
            <button class="product_page_varians_tab current_product_tab">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span class="product_page_varians_tab_name">Готовые</span>
            </button>
            <button class="product_page_varians_tab">
                <span class="material-symbols-outlined">handyman</span>
                <span class="product_page_varians_tab_name">На заказ</span>
            </button>
            <button class="product_page_varians_tab">
                <span class="material-symbols-outlined">edit</span>
                <span class="product_page_varians_tab_name">Планировщик</span>
            </button>
        </div>
    </div>
<div class="Product_Area_Wrapper">
    <div class="product_variant_header_wrapper">
        <div class="product_sub_header_wrapper">
            <h4 class="product_sub_header">Готовые отдельностоящие шкафы-купе</h4>
        </div>
        <div class="Product_Amount_Warpper">
            <span class="Product_Amount">Товаров: 148</span>
        </div>
    </div>
    <div class="Filter_area_wrapper">
        <product-filters/>
    </div>

  <ul class="Product_Listing_Wrapper">
    <li class="Product_Listing_Item">
        <a class="Product_Listing_Item_Input" href="#">
            <product-input/>
        </a>
    </li>
        <li class="Product_Listing_Item">
        <a class="Product_Listing_Item_Input" href="#">
            <product-input/>
        </a>
    </li>
        <li class="Product_Listing_Item">
        <a class="Product_Listing_Item_Input" href="#">
            <product-input/>
        </a>
    </li>
        <li class="Product_Listing_Item">
        <a class="Product_Listing_Item_Input" href="#">
            <product-input/>
        </a>
    </li>
  </ul>
</div>
</div>
</template>

<script>
import ProductFilters from '../components/Filters/Product-Filters.vue'
import ProductInput from '../components/Header/TheCatalog/Listings/Product-Input.vue'



export default {
    name: "Product-Page",
    components: {
        ProductInput,
        ProductFilters
    }
}
</script>


<style>


.product_page_meta_wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
}

.product_page_headline_container {
    grid-column: span 12;
    grid-row: 1;
    padding-left: 16px;
    padding-right: 16px;
}

.product_page_headline {
    font-family: 'Akrobat', sans-serif;
    font-size: 64px;
    line-height: 72px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    margin: 0px;
}

.product_page_variants_warpper {
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 64px;
}

.product_page_tabs_wrapper {
    grid-column: 4 / span 6;
    display: flex;
    border-radius: 24px;
    overflow: hidden;
    padding: 8px;
    background-color: var(--palette-neutral95);
}

.product_page_varians_tab {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 0px;
    padding-right: 0px;
}

.product_page_varians_tab_name {
    font-family: Golos ui, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
    padding-left: 8px;
}

.current_product_tab {
    background-color: #ffffff;
    border-radius: 16px;
    color: var(--primary-light);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    z-index: 2;
}

.Product_Area_Wrapper {
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-left: 24px;
    padding-right: 24px;
}

.product_variant_header_wrapper {
    grid-column: span 12;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 32px;
}

.product_sub_header_wrapper {
    padding-left: 16px;
}

.product_sub_header {
    font-family: Akrobat, sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0px;
}


.Product_Amount_Warpper {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 16px;
}

.Product_Amount {
    font-size: 14px;
    line-height: 20px;
    text-align: right;
}




.Filter_area_wrapper {
    grid-column: span 3;
    grid-row: 2;
    position: sticky;
    left: 0;
    top: -1px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid;
    border-top: 1px solid;    
    margin-left: -24px;
}

.Product_Listing_Wrapper {
    grid-column: 4 / span 9;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: max-content;
    list-style: none;
}

.Product_Listing_Item {
    grid-column: span 3;
    border-right: 1px solid;
    border-bottom: 1px solid;
}

.Product_Listing_Item:nth-child(-n+3) {
    border-top: 1px solid;
}

.Product_Listing_Item:nth-child(3n) {
    border-right: 0px;
    margin-right: -24px;
}

.Product_Listing_Item:nth-child(3n) a {
    padding-right: 24px;
}

.Product_Listing_Item_Input {
    display: flex;
    text-decoration: none;
}

.Product_Listing_Item_Input:hover {
    background-color: #F6F3F3;
}


</style>