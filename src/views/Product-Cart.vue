<template>
  <div class="product_cart_wrapper">
    <div class="product_cart_headline_wrapper">
      <h1 class="product_cart_headline">Корзина</h1>
    </div>
    <div class="product_cart_form_area">
      <div class="product_cart_form_area_head_wrapper">
        <h2 class="product_cart_form_area_head">Оформление заказа</h2>
      </div>
      <product-cart-form/>
    </div>
    <div class="product_cart_product_area">
      <div class="product_cart_product_area_header_wrapper">
        <div class="product_cart_product_area_head_wrapper">
          <h2 class="product_cart_product_area_head">Ваш заказ</h2>
          <span class="product_cart_product_area_amount">2 товара</span>
        </div>
        <div>
          <ri-text-small-button class="product_cart_delete filled_button_icon">
            <template v-slot:icon>
              delete
            </template>
            <template v-slot:text>
              Удалить все
            </template>
          </ri-text-small-button>
        </div>
      </div>
      <ul class="product_cart_products_list_wrapper">
        <li class="product_cart_products_list_item">
          <product-cart-input/>
        </li>
        <li class="product_cart_products_list_item">
          <product-cart-input/>
        </li>
      </ul>
      <div>
        <product-cart-order-list/>
      </div>
    </div>
  </div>
</template>

<script>
import RiTextSmallButton from '../components/Shop-Components/All-Buttons/Ri-Text-Small-Button.vue'
import ProductCartInput from '../components/Shop-Components/Product-Cart-Input.vue'
import ProductCartForm from '../components/Shop-Components/Product-Cart-Form.vue'
import ProductCartOrderList from '../components/Shop-Components/Product-Cart-Order-List.vue'
export default {
  name: "Product-Cart",
  components: { 
      ProductCartInput,
      ProductCartForm,
      RiTextSmallButton,
      ProductCartOrderList,

  },
}
</script>

<style>

.product_cart_wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: var(--palette-neutral95);
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 64px;  
}

.product_cart_headline_wrapper {
  grid-column: span 12;
  grid-row: 1;
  margin-top: 32px;
  margin-bottom: 64px;
}

.product_cart_headline {
  font-family: Akrobat, sans-serif;
  font-size: 64px;
  line-height: 72px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  color: var(--on-surface-light);
  margin: 0px;  
}



.product_cart_form_area {
  grid-row: 2;
  grid-column: span 6;
  display: flex;
  flex-direction: column;
}

.product_cart_form_area_head_wrapper {
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 32px;
}

.product_cart_form_area_head {
  font-family: Akrobat, sans-serif;
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--on-surface-light);
  margin: 0px;  
}



.product_cart_product_area {
  grid-row: 2;
  grid-column: 8 / span 5;
  display: flex;
  flex-direction: column;
}

.product_cart_product_area_header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 4px;
  margin-bottom: 32px;
}

.product_cart_product_area_head_wrapper {
  display: flex;
  align-items: baseline;
}

.product_cart_product_area_head {
  font-family: Akrobat, sans-serif;
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  text-transform: uppercase;
  padding-right: 16px;
  color: var(--on-surface-light);
  margin: 0px;
}

.product_cart_product_area_amount {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--on-surface-variant-light);
}



.product_cart_products_list_wrapper {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 24px;
}

.product_cart_products_list_item {
  border-bottom: 1px solid var(--outline-light);
}

.product_cart_products_list_item:last-child {
  border-bottom: 0px;
}

.product_cart_delete {
  color: var(--on-surface-variant-light);
}



@media (max-width: 1239px) {
  .product_cart_wrapper {
  padding-left: 16px;
  padding-right: 16px;
  }

  .product_cart_headline {
  font-size: 56px;
  line-height: 64px;
  }

  .product_cart_form_area_head {
  font-size: 28px;
  line-height: 36px;
  }

  .product_cart_product_area_head {
  font-size: 28px;
  line-height: 36px;
  }
}


@media (max-width: 904px) {
  .product_cart_wrapper {
  grid-template-columns: repeat(8, 1fr);
  }

  .product_cart_headline {
  grid-column: span 8;
  }

  .product_cart_form_area {
  grid-row: 3;
  grid-column: span 8;
  }

  .product_cart_product_area {
  grid-column: span 8;
  margin-bottom: 64px;
  }
}

@media (max-width: 599px) {
  .product_cart_wrapper {
  grid-template-columns: repeat(4, 1fr);
  padding-left: 0;
  padding-right: 0;
  }

  .product_cart_headline_wrapper {
  margin-bottom: 48px;
  }

  .product_cart_headline {
  grid-column: span 4;
  font-size: 40px;
  line-height: 48px;
  }

  .product_cart_form_area {
  grid-row: 3;
  grid-column: span 4;
  }

  .product_cart_product_area {
  grid-column: span 4;
  margin-bottom: 64px;
  }

  .product_cart_product_area_head_wrapper {
  flex-direction: column;
  row-gap: 4px;
  align-items: flex-start;
  }
}


</style>