<template>
  <form>
    <fieldset class="sign_in_form_wrapper">
        <legend class="sign_in_title">Войти</legend>
          <div class="sign_in_form_input">
              <label for="mail">Ваша почта</label>
              <input type="email" name="mail" id="mail" required>
          </div>
          <div class="sign_in_form_input">
            <div class="sign_in_label_password_wrapper">
              <label for="password">Введите пароль</label>
              <a class="sign_in_label_password">Не помню пароль</a>
            </div>
              <input type="password" name="password" id="password" required>
          </div>
    </fieldset>
    <button class="sign_in_submit_button" type="submit">
        <span class="sign_in_submit_button_text">Войти</span>
    </button>
  </form>
</template>

<script>
export default {
    name: "Sign-In-Form",

}
</script>

<style>

.sign_in_form_wrapper {
    display: grid;
    grid-row-gap: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
}

.sign_in_title {
    font-family: 'Akrobat', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.sign_in_form_input {
    display: flex;
    flex-direction: column;
}

.sign_in_label_password_wrapper {
    display: flex;
    justify-content: space-between;
}

.sign_in_label_password {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;   
}

.sign_in_form_input label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}

.sign_in_form_input input {
    font-size: 16px;
    line-height: 24px;
    padding: 16px;
    border: 1px solid;
    border-radius: 8px;
}

.sign_in_submit_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    background-color: black;
    border-radius: 100px;
}

.sign_in_submit_button_text {
    font-family: 'Golos ui', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
}

</style>