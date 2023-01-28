import "../blocks/lazy";
import "../blocks/tile";
import "../blocks/selection";      // Подбор недвижимости (selection)
import {tabsLineControl} from "../blocks/tabs";  tabsLineControl(); // управление линией подчеркивания табов
import "../blocks/block-seo";      // блок Элемент SEO
import {scrollHorizontal} from "../functions/scroll";  // горизонтальный скролл в десктопе
scrollHorizontal();

// ======== Блок Первый экран (hero) =============================================

$.ajax({
    method: "POST",
    url: "/php/querylist.php",
    data: {
        type: "get-hero-objects"
    },
    success: function (data) {
        if (data !== "") {
            let res = JSON.parse(data);
            // отрисовать блоки
            renderHeroBlocks(res);
        }
    }
});

/**
 * Отрисовать блоки
 * @param {array} images
 */
function renderHeroBlocks(res) {
    let blocks = "";
    res.forEach(el => {
        var pathImage = el.image.slice(0, -4);

        blocks +=  `<div class="hero__bottom-item">
                        <a class="hero__bottom-item-wrap" href="${el.link}">
                            <span class="hero__bottom-item-bg g-lazy-img">
                                <picture>
                                    <source srcset="${pathImage}.webp" type="image/webp">
                                    <img class="image" src="${pathImage}.jpg" alt="${el.name}" width="323" height="147">
                                </picture>
                            </span>
                            <h3 class="hero__bottom-title">${el.name}</h3>
                        </a>
                    </div>`;
    })
    $(".hero__bottom-wrap").append(blocks);
}

// ======== END Блок Первый экран (hero) ==========================================

// ======== Блок Расположение (location) ==========================================

var locationSlider = new Swiper(".location-slider", {
    roundLengths: true,
    watchOverflow: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 1,
    speed: 600,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".location-slider__pagination",
        clickable: true,
    }
})

// ======== END Расположение (location) ===========================================

// ======== Блок Комплексы на карте (map) ==========================================

var map1,
    objects = [
        ["Гарантия на Обрывной", [44.997658, 39.023536]],
        ["Гарантия в Немецкой деревне", [45.123993, 38.913715]],
        ["Гарантия на Дежнева", [45.033272, 39.073536]],
        ["Гарантия на Карякина", [45.065875, 39.004701]],
        ["Гарантия на Восточно-Кругликовской", [45.052953, 39.027722]],
    ];

// клики на табы
$(".map-tabs-select .tabs-select__item").on("click", function () {
    $(".map-tabs-select .tabs-select__item").removeClass("active");
    $(this).addClass("active");
    // задать размер и позицию подчеркивания
    $(this).parent().parent().find(".tabs-underline").css({"width" : `${$(this).width()}px`, "left" : `${$(this).position().left + +$(this).css("margin-left").slice(0, -2)}px`});

    map1.geoObjects.removeAll();
    addObjectsToMap(getAllObjects($(this).index() == 0 ? objects : [objects[$(this).index() - 1]]));
});

/**
 * Функция добавляет массив маркеров выбранных объектов на карту
 * @param {array} obj массив выбранных объектов
 */
const addObjectsToMap = obj => obj.forEach(el => map1.geoObjects.add(el));

/**
 * Функция создает массив маркеров выбранных объектов
 * @param {array} objects массив выбранных объектов
 * @returns
 */
function getAllObjects(objects) {
    var placemarkObjects = [];
    for (let i = 0; i < objects.length; ++i) {
        placemarkObjects.push(
            new ymaps.Placemark(
                objects[i][1],
                {hintContent: objects[i][0]},
                {
                    iconLayout: "default#image",
                    iconImageHref: "img/svg/map_marker.svg",
                    iconImageSize: [39, 51],
                    iconImageOffset: [-18, -51],
                }
            )
        )
    }
    return placemarkObjects;
}

// ---------- Карта ----------
if ($("#map").length) {
    function footerMapHelper() {
        ymaps.ready(function () {
            map1 = new ymaps.Map(
                "map",
                {
                    center: [45.052994, 39.002950],
                    zoom: 12,
                    suppressMapOpenBlock: true, //убирает кнопку КАК ДОБРАТЬСЯ
                }
            );

            map1.behaviors.disable("scrollZoom");
            addObjectsToMap(getAllObjects(objects));
        });
    }

    function footerMapOnScroll() {
        if ($(window).scrollTop() >= ($("#map").offset().top - 1000)) {
            $(window).off("scroll", footerMapOnScroll);
            $.getScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", footerMapHelper);
        }
    }

    $(window).on("scroll", footerMapOnScroll);
}

// ======== END Комплексы на карте (map) ===========================================
