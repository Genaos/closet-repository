<template>
  <form>
    <fieldset class="sign_up_form_wrapper">
        <legend class="sign_up_title">Зарегестрироваться</legend>
          <div class="sign_up_form_input">
              <label for="name">Ваше имя</label>
              <input type="text" name="name" id="name">
          </div>
          <div class="sign_up_form_input">
              <label for="mail">Ваша почта</label>
              <input type="email" name="mail" id="mail" required>
          </div>
          <div class="sign_up_form_input">
              <label for="password">Придумайте пароль</label>
              <input type="password" name="password" id="password" minlength="6" required>
              <span class="sign_up_input_prompt">Пароль должен содержать не менее 6 знаков</span>
          </div>
          <div class="sign_up_form_input">
              <label for="password">Повторите пароль</label>
              <input type="password" name="password" id="password" required>
          </div>
    </fieldset>
    <button class="sign_up_submit_button" type="submit">
        <span class="sign_up_submit_button_text">Создать профиль</span>
    </button>
    <div class="sign_up_form_prompt_wrapper">
        <span class="sign_up_form_prompt">Нажимая на кнопку "Войти", я даю своё согласие на обработку моих персональных данных в соответствии с законом № 152-ФЗ "О персональных данных" и принимаю условия Пользовательского соглашения</span>
    </div>
  </form>
</template>

<script>
export default {
    name: "Sign-Up-Form",

}
</script>

<style>

.sign_up_form_wrapper {
    display: grid;
    grid-row-gap: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
}

.sign_up_title {
    font-family: 'Akrobat', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.sign_up_form_input {
    display: flex;
    flex-direction: column;
}

.sign_up_form_input label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}

.sign_up_form_input input {
    font-size: 16px;
    line-height: 24px;
    padding: 16px;
    border: 1px solid;
    border-radius: 8px;
    background-color: #fafafa;
}

.sign_up_input_prompt {
    font-size: 12px;
    line-height: 16px;
    margin-top: 4px;
}

.sign_up_submit_button {
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
    margin-bottom: 32px;
}

.sign_up_submit_button_text {
    font-family: 'Golos ui', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
}

.sign_up_form_prompt_wrapper {
    padding-top: 16px;
    border-top: 1px solid;
}

.sign_up_form_prompt {
    font-size: 12px;
    line-height: 16px;
}

</style>