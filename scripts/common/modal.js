import {arcticmodal_settings, openModal} from "../functions/modal";

$(document).ready(function () {
    window.alert = function (content) {
        $(".intopModal-alert .modal__inner")
            .html(content)
            .parents(".intopModal-alert")
            .arcticmodal(arcticmodal_settings);
    };

    $(window).resize(function () {
        arcticmodal_settings.beforeOpen(null, ".intopModal:visible");
    });

    $("[data-modal]").on("click", function (event) {
        event.preventDefault();
        openModal($(this).data("modal"), arcticmodal_settings);
    });
});

