<template>
  <div class="product_item_page_area">
    <div class="product_item_page_meta_area">
        <div class="product_item_page_meta_gallery_wrapper">
            <div class="product_item_page_meta_gallery_primary_img">
                <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
            </div>
        </div>
        <div class="product_page_feature_wrapper">
            <product-feature/>
        </div>
    </div>
    <div class="product_item_page_product_area_wrapper">
        <product-item-dialog/>
    <div class="product_item_page_product_area">
        <div class="product_item_page_meta_wrapper">
            <div class="product_item_headline_container">
                <h1 class="product_item_headline">Ящик выдвижной прямой</h1>
            </div>
            <div class="product_item_description_container">
                <span class="product_item_description">Шкаф-купе с 2 раздвижными дверцами, дуб сонома, 800×500×760 мм</span>
            </div>
            <div class="product_item_price_container">
                <span class="product_item_price">125 800 ₽</span>
            </div>
            <div class="product_item_controls_wrapper">
                <div class="product_item_controls_links_wrapper">
                    <a class="product_item_controls_link">Описание</a>
                    <a class="product_item_controls_link">Характеристики</a>                   
                </div>
                <div class="product_item_controls_buttons_wrapper">
                    <button class="product_item_controls_button">
                        <div class="product_item_controls_button_icon">
                            <span class="material-symbols-outlined">favorite</span>
                        </div>
                        <span class="product_item_controls_button_text">
                            В избранное
                        </span>
                    </button>
                    <button class="product_item_controls_button"> 
                        <div class="product_item_controls_button_icon">
                            <span class="material-symbols-outlined">favorite</span>
                        </div>
                        <span class="product_item_controls_button_text">
                            Сравнить
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="product_item_widgets_wrapper">
            <div class="product_item_widgets_choice_wrapper">
                <div class="product_item_widgets_choice_description_wrapper">
                    <span class="product_item_widgets_choice_description">Вариантов размера: 6 и вариантов цвета: 4</span>
                </div>
                <div class="product_item_widgets_choice_buttons_wrapper">
                    <button type="button" onclick="window.myDialog.show();" class="product_item_widgets_choice_button">
                        <div class="product_item_widgets_choice_button_meta">
                            <span class="product_item_widgets_choice_button_head">Выберете размер (6)</span>
                            <span class="product_item_widgets_choice_button_value">800×500×760 мм</span>
                        </div>
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                    <button class="product_item_widgets_choice_button">
                        <div class="product_item_widgets_choice_button_meta">
                            <span class="product_item_widgets_choice_button_head">Выберете размер (6)</span>
                            <span class="product_item_widgets_choice_button_value">800×500×760 мм</span>
                        </div>
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
            <div class="product_item_widgets_cart_button_wrapper">
                <button class="product_item_widgets_cart_button">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span class="product_item_widgets_cart_button_text">Добавить в корзину</span>
                </button>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import ProductFeature from '../components/Shop-Components/Product-Feature.vue'
import ProductItemDialog from '../components/Shop-Components/Product-Item-Dialog.vue'
export default {
    name: "Product-Item-Page",
    components: { 
        ProductFeature,
        ProductItemDialog,
    },

}
</script>

<style>

.product_item_page_area {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-left: 24px;
    padding-right: 24px;    
}

.product_item_page_meta_area {
    grid-column: span 8;
    display: grid;
    border-right: 1px solid;
}

.product_item_page_meta_gallery_wrapper {
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding-top: 24px;
    margin-bottom: 64px;
}

.product_item_page_meta_gallery_primary_img {
    grid-column: 3 / span 6;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin-right: 16px;
    margin-left: 16px;
}

.product_item_page_meta_gallery_primary_img img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.product_page_feature_wrapper {
    grid-row: 2;
    padding-left: 16px;
    padding-right: 16px;
}




.product_item_page_product_area_wrapper {
    grid-column: span 4;
    margin-right: -24px;
}

.product_item_page_product_area {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
}

.product_item_page_meta_wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid;
}

.product_item_headline_container {
    margin-bottom: 4px;
    padding-right: 40px;
}

.product_item_headline {
    font-family: Akrobat, sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0px;
}

.product_item_description_container {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    padding-right: 40px;
}

.product_item_description {
    font-size: 14px;
    line-height: 20px;
}

.product_item_price_container {
    display: flex;
    flex-direction: row;
    margin-bottom: 32px; 
}

.product_item_price {
    font-size: 28px;
    line-height: 36px;
    font-weight: 500;
}

.product_item_controls_wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-right: 24px;
}

.product_item_controls_links_wrapper {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
}

.product_item_controls_link {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 8px;
}

.product_item_controls_buttons_wrapper {
    grid-column: span 2;
    display: flex;
}

.product_item_controls_button {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    padding: 0px;  
}

.product_item_controls_button_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 100px;
}

.product_item_controls_button_text {
    font-family: Golos ui, sans-serif;
   font-weight: 500;
   font-size: 12px;
   line-height: 16px;
   text-align: center;
   padding-top: 8px;
}



.product_item_widgets_wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-top: 16px;
}

.product_item_widgets_choice_wrapper {
    display: flex;
    flex-direction: column;
    padding-right: 40px;
}

.product_item_widgets_choice_description_wrapper {
    display: flex;
    margin-bottom: 16px;
}

.product_item_widgets_choice_description {
    font-size: 14px;
    line-height: 20px;
}

.product_item_widgets_choice_buttons_wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
}

.product_item_widgets_choice_button {
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

.product_item_widgets_choice_button:last-child {
    margin-bottom: 0px;
}

.product_item_widgets_choice_button_meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.product_item_widgets_choice_button_head {
    display: flex;
    font-family: 'Golos ui', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
}

.product_item_widgets_choice_button_value {
    font-family: Golos ui, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;     
}

.product_item_widgets_cart_button_wrapper{
    display: flex;
    margin-bottom: 32px;
}

.product_item_widgets_cart_button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px 10px 16px;
  font-family: 'Golos ui', sans-serif;
  color: #ffffff;
  background: #000000;
  border-radius: 100px;
}

.product_item_widgets_cart_button_text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-left: 8px;
}

</style>