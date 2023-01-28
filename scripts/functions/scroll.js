import {isFromTablet} from "./size";

export function scrollToBlock(selector, speed = 600) {
    let offsetTop = 0;

    if (selector === "#top") {
        selector = "html";
    } else {
        if (!isFromTablet()) {
            offsetTop = $(".header").outerHeight();
        }
    }

    $(window).queue([]).scrollTo(selector, speed, {
        offset: {
            top: -offsetTop
        }
    });

    setTimeout(function() {
        $(window).queue([]).scrollTo(selector, speed, {
            offset: {
                top: -offsetTop
            }
        });
    }, 600);
}

export function scrollHorizontal() {
    // скролл мышкой в десктопе
    document.querySelectorAll('.scroll-x').forEach(function(el) {
        let isDown = false;
        let startX;
        let scrollLeft;

        el.addEventListener('mousedown', (e) => {
            isDown = true;
            el.classList.add('active');
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        });
        el.addEventListener('mouseleave', () => {
            isDown = false;
            el.classList.remove('active');
        });
        el.addEventListener('mouseup', () => {
            isDown = false;
            el.classList.remove('active');
        });
        el.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 3;
            el.scrollLeft = scrollLeft - walk;
        });
    })
}
