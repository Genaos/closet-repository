<template>
  <div class="product_cart_input_wrapper">
    <div class="product_cart_input_image_wrapper">
        <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
    </div>
    <div class="product_cart_input_data_area">
        <div class="product_cart_input_meta_wrapper">
            <div class="product_cart_input_meta_header_wrapper">
                <h3 class="product_cart_input_meta_header">Ящик выдвижной прямой</h3>
                <span class="product_cart_input_meta_price">4570&nbsp;₽</span>
            </div>
            <ul class="product_cart_input_meta_description">
                <li class="product_cart_input_meta_description_input">
                    <span class="product_cart_input_meta_description_text">800×500×760 мм</span>
                </li>
            </ul>
        </div>
    </div>
        <div class="product_cart_input_controls_wrapper">
            <div class="product_cart_input_controls_wrapper_buttons">
                <div class="product_cart_input_controls_favorite">
                    <ri-text-small-button>
                        <template v-slot:icon>
                            favorite
                        </template>
                        <template v-slot:text>
                            В избранное
                        </template>
                    </ri-text-small-button>
                </div>
                <icon-small-button class="product_cart_input_delete">
                    delete
                </icon-small-button>
            </div>
            <div class="product_cart_input_controls_wrapper_counter">
            </div>
        </div>
  </div>
</template>

<script>
import IconSmallButton from './All-Buttons/Icon-Small-Button.vue'
import RiTextSmallButton from './All-Buttons/Ri-Text-Small-Button.vue'
export default {
    name: "Product-Cart-Input",
    components: { 
    RiTextSmallButton,
        IconSmallButton,
  },
}
</script>

<style>
.product_cart_input_wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #fff;
    padding-top: 16px;
    padding-bottom: 16px;
}

.product_cart_input_image_wrapper {
    grid-row: 1 / span 2;
    grid-column: span 1;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin-left: 16px;
}

.product_cart_input_image_wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}




.product_cart_input_data_area {
    grid-row: 1;
    grid-column: 2 / span 4;
    display: flex;
    flex-direction: column;
}

.product_cart_input_meta_wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
}

.product_cart_input_meta_header_wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
}

.product_cart_input_meta_header {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--on-surface-light);
    margin: 0px;
}

.product_cart_input_meta_price {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--on-surface-light);
    margin: 0px;
}



.product_cart_input_meta_description {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 24px;
}

.product_cart_input_meta_description_text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--on-surface-variant-light);
}



.product_cart_input_controls_wrapper {
    grid-row: 2;
    grid-column: 2 / span 4;
    display: flex;
    justify-content: space-between;
    padding-left: 4px;
    padding-right: 16px;
}

.product_cart_input_controls_wrapper_buttons {
    display: flex;
}

.product_cart_input_controls_favorite {
    margin-right: 8px;
}

.product_cart_input_delete {
    color: var(--on-surface-variant-light);
}


@media (max-width: 1239px) {
  .product_cart_input_controls_wrapper {
    grid-row: 3;
    grid-column: span 5;
  }

  .product_cart_input_image_wrapper {
    grid-row: 1;
    margin-bottom: 24px;
  }
}

@media (max-width: 904px) {
  .product_cart_input_wrapper {
    grid-template-columns: repeat(8, 1fr);
  }

  .product_cart_input_data_area {
    grid-column: 2 / span 7;
  }

  .product_cart_input_controls_wrapper {
    grid-column: span 8;
  }
}

@media (max-width: 599px) {
  .product_cart_input_wrapper {
    grid-template-columns: repeat(4, 1fr);
  }

  .product_cart_input_data_area {
    grid-column: 2 / span 3;
  }

  .product_cart_input_controls_wrapper {
    grid-column: span 4;
  }
}

</style>