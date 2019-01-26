"use strict";

const formData = {
        init() {
            const btnSubmit = document.querySelector('button[type="submit"]');
            btnSubmit.addEventListener('click', event => this.checkForm(event));
        },

        /**
         * Проверяет все поля формы на корректность
         */
        checkForm(event) {
            event.preventDefault();

            const form = document.querySelector('.my-form');
            const name = form.querySelector('input[name="name"]');
            const phone = form.querySelector('input[name="phone"]');
            const pswd_1 = form.querySelector('input[name="password"]');
            const pswd_2 = form.querySelector('input[name="password_repeat"]');


            if (!this.isCorrectName(name)) {
                this.addErrorMsg(name, 'Поле должно содержать от 1 до 10 символов');
            } else {
                this.cleanErrorMsg(name);
            }

            if (!this.isCorrectPhone(phone)) {
                this.addErrorMsg(phone, 'Поле должно содержать 11 цифр');
            } else {
                this.cleanErrorMsg(phone);
            }

            if (!this.isCorrectPassword(pswd_1)) {
                this.addErrorMsg(pswd_1, 'Поле должно содержать от 5 до 10 символов');
            } else {
                this.cleanErrorMsg(pswd_1);
            }

            if (!this.isCorrectPasswordRepeat(pswd_1, pswd_2)) {
                this.addErrorMsg(pswd_2, 'Пароли не совпадают');
            } else {
                this.cleanErrorMsg(pswd_2);
            }
        },

        /**
         * Проверяет на корректность ввода имя
         * @returns {boolean}
         */
        isCorrectName(name) {
            return name.value.length !== 0 && name.value.length <= 10;
        },

        /**
         * Проверяет на корректность ввода телефон
         * @returns {boolean}
         */
        isCorrectPhone(phone) {
            return +(phone.value) && phone.value.length === 11;
        },

        /**
         * Проверяет на корректность ввода первое поле пароля
         * @returns {boolean}
         */
        isCorrectPassword(pswd) {
            return pswd.value.length >= 5 && pswd.value.length <= 10;
        },

        /**
         * Проверяет на корректность ввода второе поле пароля
         * @returns {boolean}
         */
        isCorrectPasswordRepeat(pswd_1, pswd_2) {
            return pswd_1.value === pswd_2.value;
        },

        /**
         * Добавляет сообщение с ошибкой, если его нет
         */
        addErrorMsg(field, message) {
            const divError = document.createElement('div');
            divError.setAttribute('class', 'error_message');
            if (!field.parentElement.querySelector('.error_message')) {
                field.parentElement.appendChild(divError);
                divError.innerText = message;
            }
        },

        /**
         * Очищает сообщение об ошибке в поле, если оно есть
         */
        cleanErrorMsg(field) {
            const error_msg = field.parentElement.querySelector('.error_message');
            if (error_msg) {
                error_msg.remove();
            }
        },
    }
;

formData.init();
