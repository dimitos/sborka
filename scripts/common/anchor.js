import {scrollToBlock} from "../functions/scroll";

/**
 * Smooth scroll to anchor
 */
$("a[href^='#']:not([data-modal])").click(function (event) {
    event.preventDefault();
    if ($(this).attr("href") !== "#") scrollToBlock($(this).attr("href"));
});

$(".g-scroll").click(function (event) {
    event.preventDefault();
    scrollToBlock($(this).data("scroll"));
});

/**
 * Delete anchor hash
 */
const hash = document.querySelectorAll(".del-hash");
if (document.querySelectorAll(".del-hash")) {
    hash.forEach((el) => el.addEventListener("click", () => setTimeout(() => history.replaceState(null, null, " "), 1), {passive: true}));
}


$(".chek-item").on("click", function() {$(this).toggleClass("checked")})
