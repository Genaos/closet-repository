<template>
  <div class="product_feature_wrapper">
    <div class="product_feature_description_wrapper">
        <h3 class="product_feature_description_head">Описание</h3>
        <p class="product_feature_description_meta">Шкафная группа шкафов-купе HOME отлично подойдет для большой семьи. Продуманное внутреннее наполнение позволяет зонировать хранение одежды каждого члена семьи.</p>
    </div>
    <div class="product_feature_specification_wrapper">
        <h3 class="product_feature_specification_head">Характеристики</h3>
        <dl class="product_feature_specification">
            <dt class="product_feature_specification_key">Имя</dt>
            <dd class="product_feature_specification_value">Гарри Джеймс Поттер</dd>
            <dt class="product_feature_specification_key">День рождения</dt>
            <dd class="product_feature_specification_value">31 июля 1980 года</dd>
        </dl>
    </div>
  </div>
</template>

<script>
export default {
        name: "Product-Feature",

}
</script>

<style>

.product_feture_wrapper {
    display: flex;
    flex-direction: column;
}

.product_feature_description_wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    border-top: 1px solid;
    border-bottom: 1px solid;
}

.product_feature_description_head {
    grid-column: span 8;
    grid-row: 1;
    font-family: 'Golos UI', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    padding-bottom: 24px;
    margin: 0px;
}

.product_feature_description_meta {
    grid-column: span 8;
    grid-row: 2;
    font-family: 'Golos UI', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin: 0px;
}

.product_feature_specification_wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid;    
}

.product_feature_specification_head {
    font-family: 'Golos UI', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    padding-bottom: 24px;
    margin: 0px; 
}

.product_feature_specification {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 32px;
    margin: 0px;
}

.product_feature_specification_key {
    grid-column: span 3;
    padding-bottom: 12px;
    margin: 0px;
    font-family: 'Golos UI', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
}

.product_feature_specification_value {
    grid-column: 4 / span 5;
    font-family: 'Golos UI', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin: 0px;
}

</style>