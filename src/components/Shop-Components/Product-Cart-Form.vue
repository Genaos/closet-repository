<template>
  <div>
    <form class="product_card_form_wrapper">
      <fieldset class="product_card_form_section">
        <legend class="product_card_form_section_header">Ваши данные</legend>
          <div class="product_card_form_input_wrapper">
            <input class="product_card_form_input" type="text" id="name" placeholder=" " required>
            <label class="product_card_form_input_label" for="name">Ваше имя</label>            
          </div>
          <div class="product_card_form_input_wrapper">
            <input class="product_card_form_input" type="email" id="mail" placeholder=" " required>
            <label class="product_card_form_input_label" for="mail">Ваша почта</label>             
          </div>
          <div class="product_card_form_input_wrapper">
            <input class="product_card_form_input" type="tel" id="phone" placeholder=" " required>
            <label class="product_card_form_input_label" for="phone">Ваш телефон</label>               
          </div>
      </fieldset>
      <fieldset class="product_card_form_section">
        <legend class="product_card_form_section_header">Дополнительные услуги</legend>
          <div class="product_card_form_services_wrapper">
            <toggle-input-outline/>
          </div>
      </fieldset>
      <fieldset class="product_card_form_section">
        <legend class="product_card_form_section_header">Способ доставки</legend>
        <p class="product_card_form_delivery_info">Доставка осуществляется по Санкт-Петербургу и некоторым населенным пунктам Ленинградской области. Узнать подробную информацию о зонах и условиях доставки можно в разделе доставка</p>
        
            <radio-input-store class="product_card_form_delivery_input"
              InputOptionName="Самовывоз"
              InputOptionMeta="Ул. Крупской д. 21 к.1"
              InputOptionPrice="Бесплатно"
            />

            <radio-input-store class="product_card_form_delivery_input"
              InputOptionName="Доставка"
              InputOptionMeta="3 - 5 рабочих дней"
              InputOptionPrice="От 1000 ₽"
            />

      </fieldset>
      <fieldset class="product_card_form_section">
        <legend class="product_card_form_section_header">Адрес доставки</legend>
          <div class="product_card_form_large_input_wrapper">
            <input class="product_card_form_input" type="text" id="addres" placeholder=" " required>
            <label class="product_card_form_input_label" for="addres">Адрес</label>            
          </div>
          <div class="product_card_form_input_wrapper small_input">
            <input class="product_card_form_input" type="text" id="flat" placeholder=" " required>
            <label class="product_card_form_input_label" for="flat">Кв. / офис</label>             
          </div>
          <div class="product_card_form_input_wrapper small_input">
            <input class="product_card_form_input" type="text" id="floor" placeholder=" " required>
            <label class="product_card_form_input_label" for="floor">Этаж</label>               
          </div>               
      </fieldset>
      <div class="product_card_form_submit_button_wrapper">
        <button class="product_card_form_submit_button" type="submit">
          <span class="product_card_form_submit_button_text">Перейти к оплате</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import RadioInputStore from './All-Inputs/Radio-Input-Store.vue'
import ToggleInputOutline from './All-Inputs/Toggle-Input-Outline.vue'
export default {
    name: "Product-Cart-Form",
    components: {
      RadioInputStore,
      ToggleInputOutline,

    },

}
</script>


<style>

.product_card_form_wrapper {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  row-gap: 48px;
}

.product_card_form_section {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 24px;
}

.product_card_form_section_header {
  grid-column: span 6;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
  color: var(--on-surface-light);
}

.product_card_form_input_wrapper {
  grid-column: span 3;
  position: relative;
  display: flex;
  flex-direction: column;
}

.product_card_form_input_label {
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--on-surface-light);
    pointer-events: none;
    transform-origin: 0 50%;
    transition: transform 200ms;
}

.product_card_form_input {
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 8px;
    border: 1px solid var(--outline-light);
    border-radius: 8px;
}

.product_card_form_input:focus ~ .product_card_form_input_label, 
.product_card_form_input:not(:placeholder-shown) ~ .product_card_form_input_label {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    transform: translateY(-16px);
}

.product_card_form_input:focus {
  outline-color: var(--primary-light);
}



.product_card_form_services_wrapper {
  grid-column: span 6;
}



.product_card_form_delivery_info {
  grid-column: span 6;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

.product_card_form_delivery_input {
  grid-column: span 3;
}



.product_card_form_large_input_wrapper {
  grid-column: span 6;
  position: relative;
  display: flex;
  flex-direction: column;
}



.product_card_form_submit_button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: 'Golos ui', sans-serif;
  color: #ffffff;
  background-color: var(--primary-light);
  border-radius: 100px;  
}

.product_card_form_submit_button_text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
}


@media (max-width: 904px) {
  .product_card_form_section {
    grid-template-columns: repeat(8, 1fr);
  }

  .product_card_form_section_header {
    grid-column: span 8;
  }

  .product_card_form_input_wrapper {
    grid-column: span 4;
  }

  .product_card_form_services_wrapper {
    grid-column: span 8;
  }

  .product_card_form_delivery_info {
    grid-column: span 8;
  }

  .product_card_form_delivery_input {
    grid-column: span 4;
  }

  .product_card_form_large_input_wrapper {
    grid-column: span 8;
  }
}

@media (max-width: 599px) {
  .product_card_form_section {
    grid-template-columns: repeat(4, 1fr);
  }

  .product_card_form_section_header {
    grid-column: span 4;
  }

  .product_card_form_input_wrapper {
    grid-column: span 4;
  }

  .product_card_form_services_wrapper {
    grid-column: span 4;
  }

  .product_card_form_delivery_info {
    grid-column: span 4;
  }

  .product_card_form_delivery_input {
    grid-column: span 4;
  }

  .product_card_form_large_input_wrapper {
    grid-column: span 4;
  }

  .small_input {
    grid-column: span 2;
  }
}


</style>