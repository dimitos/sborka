import {openModalThanks} from "../functions/modal";

// ------------ Валидация форм -----------------------------------------------------------------------

// при фокусе поля убираем вывод ошибки
removePrintErrorFocus(".input-company");
removePrintErrorFocus(".input-name");
removePrintErrorFocus(".input-phone");
removePrintErrorFocus(".input-email");
$(".input__checkbox").change(function () {
    $(this).removeClass("input-error");
});

// нажатие на кнопку ОТПРАВИТЬ
$(".form-btn").on("click", function () {
    var inputCompany = $(this).parent().find(".input-company");
    var inputName = $(this).parent().find(".input-name");
    var inputPhone = $(this).parent().find(".input-phone");
    var inputEmail = $(this).parent().find(".input-email");
    var inputPass = $(this).parent().find(".input-pass");
    var inputCheckbox = $(this).parent().find(".input__checkbox-privacy");

    // если поле валидно ...
    if(getValidForm(inputCompany, inputName, inputPhone, inputEmail, inputCheckbox)) {
        // отправляем ajax ...
        console.log("Валидация успешно пройдена");
        // обнуляем форму
        $(this).parent().parent().find("form")[0].reset();
        // открываем попап СПАСИБО
        openModalThanks();
    };
})

/**
 * Функция убирает вывод ошибки при фокусе поля
 * @param {node} el элемент
 */
function removePrintErrorFocus(el) {
    $(el).focus(function () {
        $(this).removeClass("input-error");
    });
}

/**
 * Функция выводит ошибку заполнения поля
 * @param {node} el элемент
 */
function printError(el) {
    $(el).addClass("input-error");
}

/**
 * Функция проверяет валидно ли поле телефона
 * @param {node} el элемент
 * @returns {boolean} да нет
 */
function inputChekPhone(el) {
    if ($(el).length == 0) return true;
    if ($(el).val().length < 10) {
        printError(el);
        return false;
    } else return true;
}

/**
 * Функция проверяет валидно ли поле text
 * @param {node} el элемент
 * @returns {boolean} да нет
 */
function inputChekText(el) {
    if ($(el).length == 0) return true;
    if (!$(el).val()) {
        printError(el);
        return false;
    } else return true;
}

/**
 * Функция проверяет валидно ли поле Email
 * @param {node} el элемент
 * @returns {boolean} да нет
 */
function inputChekEmail(el) {
    if ($(el).length == 0) return true;
    if ($(el).val().length == 0 || ($(el).val().length > 0 && ($(el).val().match(/.+?\@.+/g) || []).length !== 1)) {
        printError(el);
        return false;
    } else return true;
}

/**
 * Функция проверяет валидно ли поле privacy
 * @param {node} el элемент
 * @returns {boolean} да нет
 */
function inputChekPrivacy(el) {
    if ($(el).length == 0) return true;
    if (!$(el).prop("checked")) {
        printError(el);
        return false;
    } else return true;
}

/**
 * Функция проверяет валидна ли вся форма
 * @param {node} company поле наименование компании
 * @param {node} name поле имя
 * @param {node} phone поле телефона
 *  @param {node} checkbox поле privacy
 * @returns {boolean} да нет
 */
function getValidForm(company, name, phone, email, checkbox) {
    // проверяем поля формы
    const userCompany = inputChekText(company);
    const userName = inputChekText(name);
    const userPhone = inputChekPhone(phone);
    const userEmail = inputChekEmail(email);
    const userPrivacy = inputChekPrivacy(checkbox);
    return userCompany && userName && userPhone && userEmail && userPrivacy;
}
