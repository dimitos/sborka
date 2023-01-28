export function windowHeight() {
    return parseFloat(window.innerHeight) || parseFloat($(window).height());
}

export function windowWidth() {
    return parseFloat(window.innerWidth) || parseFloat($(window).width());
}

export function isFromTablet() {
    return windowWidth() >= 768;
}

export function isFromLaptop() {
    return windowWidth() >= 1100;
}

export function isFromNotebook() {
    return windowWidth() >= 1200;
}

export function isFromDesktop() {
    return windowWidth() >= 1520;
}
