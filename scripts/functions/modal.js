import {windowHeight, windowWidth} from "./size";

export let arcticmodal_settings = {
    overlay: {
        css: {opacity: .2},
    },
    beforeOpen(data, modal) {
        let modalParent = $(modal).parent();
        let maxHg =
            windowHeight() -
            modalParent.padding("top") -
            modalParent.padding("bottom");
        $(modal).css("max-height", maxHg);

        let bodyPage = $(".page").outerWidth(true);
        let scrollWidth = windowWidth() - bodyPage;

        if (scrollWidth > 0 && bodyPage <= 1920) {
            $(".lock-padding").css({"padding-right": scrollWidth});
        }
    },
    afterClose(data, modal) {
        $(".lock-padding").css({"padding-right": 0});
        $(".intopModal__content input").removeClass("input-error");
        $(".intopModal-view .m-view__wrap").remove();
    }
};

/**
 * Функция открывает попап СПАСИБО
 */
export function openModalThanks(phone) {
    let $modal = $(".intopModal-thanks");
    if ($modal.length > 0) {
        $modal.find(".thanks-modal__phone").html(phone);
        if ($(".page__body").hasClass("arcticmodal-wrap-active")) {
            $(".arcticmodal-container .intopModal").arcticmodal("close");
            setTimeout(() => {
                $modal.arcticmodal(arcticmodal_settings);
            }, 100);
        } else {
            $modal.arcticmodal(arcticmodal_settings);
        }
    }
}

export function openModal(eng, arcticmodal_setting_modal) {
    let $modal = $(".intopModal-" + eng);
    if ($modal.length > 0) {
        if ($(".page__body").hasClass("arcticmodal-wrap-active")) {
            $(".arcticmodal-container .intopModal").arcticmodal("close");
            setTimeout(() => {
                $modal.arcticmodal(arcticmodal_setting_modal);
            }, 100);
        } else {
            $modal.arcticmodal(arcticmodal_setting_modal);
        }
    }
}

/**
 * Функция отрисовывает фото в модалке просмотра (view)
 * @param {string} imgSrc путь к картинке
 */
export function renderViewModalImage(imgSrc) {

    $(".intopModal-view").attr("data-view", "image");
    $(".intopModal-view .m-view__wrap").remove();

    var picture = `<picture class="m-view__wrap">
                        <source srcset="${imgSrc}.webp" type="image/webp">
                        <img class="m-view__image"
                            src="${imgSrc}.jpg"
                            alt="Альпика Групп"
                            width="1800"
                            height="900"
                            loading="lazy">
                    </picture>`
    $(".intopModal-view .m-view").append(picture);
}

/**
 * Открытие модалки просмотра (view)
 */
export function openModalView() {
    let $modal = $(".intopModal-view");
    if ($modal.length > 0) {
        if ($(".page__body").hasClass("arcticmodal-wrap-active")) {
            $((".arcticmodal-container .intopModal")).arcticmodal('close');
            setTimeout(() => {
                $modal.arcticmodal(arcticmodal_settings);
            }, 100);
        } else {
            $modal.arcticmodal(arcticmodal_settings);
        }
    }
}
