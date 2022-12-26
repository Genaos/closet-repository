<template>
  <div class="log_in_area">
    <section class="log_in_form_wrapper">
        <div class="log_in_tab_button_wrapper">
            <button class="log_in_varians_tab current_log_in_tab">
                <span class="log_in_varians_tab_name">Вход</span>
            </button>
            <button class="log_in_varians_tab">
                <span class="log_in_varians_tab_name">Регистрация</span>
            </button>
        </div>
        <sign-up-form/>
    </section>
  </div>
</template>

<script>
import SignInForm from '../components/Shop-Components/Sign-In-Form.vue'
import SignUpForm from '../components/Shop-Components/Sign-Up-Form.vue'


export default {
    name: "Log-In",
    components: { 
        SignUpForm,
        SignInForm,
    },

}
</script>

<style>

.log_in_area {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-left: 24px;
    padding-right: 24px;
    background-color: #f0f0f0;
}

.log_in_form_wrapper {
    grid-column: 5 / span 4;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 16px;
    margin-top: 32px;
    margin-bottom: 32px;
}

.log_in_tab_button_wrapper {
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    padding: 4px;
    background-color: #f0f0f0;
}

.log_in_varians_tab {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    padding-right: 0px;
}

.log_in_varians_tab_name {
    font-family: Golos ui, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    text-align: center;
    padding-left: 8px;
}

.current_log_in_tab {
    background-color: #ffffff;
}

</style>