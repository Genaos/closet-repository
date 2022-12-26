<template>
  <div class="Product_Input_Wrapper">
    <div class="Product_Input_Img_Wrapper">
        <img src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
    </div>
    <div class="Product_Input_Meta_Wrapper">
        <div class="Product_Input_Meta">
            <span class="Product_Input_Meta_Name">Ящик выдвижной прямой</span>
            <span class="Product_Input_Meta_Description">Ещё 6 вариантов размера, 3 варианта цвета</span>
        </div>
        <span class="Product_Input_Meta_Price">2280&nbsp;₽</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "Product-Input",

}
</script>

<style>
.Product_Input_Wrapper {
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.Product_Input_Img_Wrapper {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin-bottom: 16px;
}

.Product_Input_Img_Wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.Product_Input_Meta_Wrapper {
    display: flex;
    justify-content: space-between;
    color: black;
}

.Product_Input_Meta {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
}

.Product_Input_Meta_Name {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    padding-bottom: 4px;
}

.Product_Input_Meta_Description {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}

.Product_Input_Meta_Price {
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
}

</style>