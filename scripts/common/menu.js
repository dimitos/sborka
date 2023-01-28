// элементы с позицией fixed
import {windowWidth} from "../functions/size";

// текущая ширина page
let bodyPage = $(".page").outerWidth(true);
// ширина скролла страницы
let scrollWidth = windowWidth() - bodyPage;

// позиционируем header
//posHeader();

// $(window).on("resize", function () {
//     posHeader();
//     if ($(".menu").hasClass("active")) {
//         bodyPage = $(".page").outerWidth(true);
//         if (scrollWidth > 0 && bodyPage > 1920) {
//             bodyPage = $(".page").outerWidth(true);
//             $(".page").css({"margin-right": (bodyPage - 1920) / 2});
//         }
//     }
// })

// открываем/закрываем меню от кликов
$(document).on("click", (e) => {
    if ($(".header-mob__closer").is(e.target) && !$(".header-mob__closer").hasClass("active")) openMenu();
    else if ($(".header-mob__closer").is(e.target) && $(".header-mob__closer").hasClass("active")) closeMenu();
});

/* ------------------------------ Функции -----------------------------------*/
function posHeader() {
    bodyPage = $(".page").outerWidth(true);
    $("header").css({"left": windowWidth() <= 1920 ? -1 : (bodyPage - 1920) / 2 - 1});
}

/**
 * Функция открывает меню
 */
function openMenu() {
    bodyPage = $(".page").outerWidth(true);
    scrollWidth = windowWidth() - bodyPage;

    if (scrollWidth > 0 && bodyPage <= 1920) {
        $(".page__body").css({"padding-right": scrollWidth});
        $(".header-desc").css({"padding-right": scrollWidth});
    } else if (scrollWidth > 0 && bodyPage > 1920) {
        $(".page").css({"margin-right": (bodyPage - 1920) / 2 + scrollWidth});
    }

    $(".menu").addClass("active");
    $(".header-mob__closer").addClass("active");
    $(".menu.active").css({"left": windowWidth() <= 1920 ? -1 : (bodyPage - 1920) / 2 - 1});
    $(".page").css({overflow: "hidden"});
}

/**
 * Функция закрывает меню
 */
function closeMenu() {
    $(".menu").removeClass("active");
    $(".header-mob__closer").removeClass("active");
    $(".menu").css({"left": "-105%"});
    $(".page").css({overflow: "initial"});
    // удалить паддинг справа у body
    $(".page__body").css({"padding-right": 0});
    $(".header-desc").css({"padding-right": 0});
    $(".page").css({"margin-right": "auto"});
}
