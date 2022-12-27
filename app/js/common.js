//mouse hidden bg
let bgHidden = document.querySelector('.hidden-bg .img');
function ifHiddenBg() {
    if (bgHidden) {
        function update(e){
            let rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left || e.touches[0].clientX  - rect.left;
            var y = e.clientY  - rect.top || e.touches[0].clientY  - rect.top;

            bgHidden.style.setProperty('--cursorX', x + 'px');
            bgHidden.style.setProperty('--cursorY', y + 'px');
        }

        bgHidden.addEventListener('mousemove',update)
        bgHidden.addEventListener('touchmove',update);
        bgHidden.addEventListener('mouseout', () => {
            bgHidden.style.setProperty('--cursorX', '-50vw');
            bgHidden.style.setProperty('--cursorY', '-50vh');
        })
    }
}
ifHiddenBg();


//header scroll

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 52);

    scrollParallaxBg();
    scrollParallaxImg();
});

function headerStart() {
    let headr = document.querySelector('.header');
    let hei = headr.offsetHeight;
    console.log(hei);
    if (window.innerWidth < 768) {
        let hm = document.querySelector('.header-menu');
        hm.style.height = `calc((100vh - ${hei}px) + 4.1767vw)`;
    }
}
headerStart();


//scrolling bg

let scrollingBg = [...document.querySelectorAll('.scrolled-bg')];

function scrollParallaxBg() {
    if (scrollingBg.length) {
        scrollingBg.forEach((bg) => {
            let toTop = bg.getBoundingClientRect().top;
            let h = bg.offsetHeight;
            let inc = bg.dataset.inc;
            // console.log(h);
            // console.log(toTop);
            if (toTop < 0) {
                if (inc > 0.6) {
                    inc = 0.6;
                }
                bg.style.setProperty('--st', `${((toTop * (-1)) / h) * 100 * inc}%`);
            } else {
                bg.style.setProperty('--st', '0');
            }
        })
    }
}

scrollParallaxBg();


//scrolling bg

//scrolling img

let scrollingImg = [...document.querySelectorAll('.scrolled-img')];

function scrollParallaxImg() {
    if (scrollingImg.length) {
        scrollingImg.forEach((bg) => {
            let toTop = bg.getBoundingClientRect().top;
            let w = window.innerHeight;
            // console.log(w);
            let h = bg.offsetHeight;
            let inc = bg.dataset.inc;
            // console.log(h);

            if (toTop < w) {
                if (inc > 0.6) {
                    inc = 0.6;
                }
                bg.style.setProperty('--st', `${((toTop * (-1)) / w) * 100 * inc}%`);
            } else {
                bg.style.setProperty('--st', '0');
            }
        })
    }
}

scrollParallaxImg();


//scrolling img

//header scroll

//go next click

let btnNext = [...document.querySelectorAll('.go-next-btn')];

function clickNext() {
    if (btnNext.length) {
        btnNext.forEach((btn) => {
            let next = btn.nextElementSibling;

            btn.addEventListener('click', () => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(next).offset().top - $('.header').height()
                }, 400);
            })
        })
    }
}

clickNext();

//go next click


var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();

//mouse follows
let compass = document.querySelector(".compass-img .comp");
function ifCompass() {
    if (compass) {


        $("body").mousemove(function(event) {
            var eye = $(".compass-img .comp");
            var eye2 = $(".compass-img .comp img");
            // console.log('eye', eye);
            // console.log(eye.offset().top);
            // console.log(eye.offset().left);
            var x = (eye.offset().left) + (eye.width() / 2);
            var y = (eye.offset().top) + (eye.height() / 2);
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            eye2.css({
                '-webkit-transform': 'rotate(' + rot + 'deg)',
                '-moz-transform': 'rotate(' + rot + 'deg)',
                '-ms-transform': 'rotate(' + rot + 'deg)',
                'transform': 'rotate(' + rot + 'deg)'
            });

        });



    }
}

ifCompass();


//lines strokes

let arrowScroll = [...document.querySelectorAll('.arrow-scrolling')];
var controller = new ScrollMagic.Controller();

function arrowScrolling() {
    if (arrowScroll.length) {
        arrowScroll.forEach((sv) => {
            let pathes = [...sv.querySelectorAll('path.ln')];
            let trigg = sv.querySelector('.trigg');
            let trigg2 = sv.querySelector('.trigg2');
            let ar = [...sv.querySelectorAll('path.arr')];
            pathes.forEach((btn) => {
                let lng = btn.getTotalLength();
                btn.style.strokeDashoffset = lng+'px';
                btn.style.strokeDasharray = lng+'px';

                var scene = new ScrollMagic.Scene({triggerElement: trigg, duration: '45%'})
                    // animate color and top border in relation to scroll position
                    .setTween(btn, {
                        strokeDashoffset: "0",
                        ease: Linear.easeNone,
                    }) // the tween durtion can be omitted and defaults to 1
                    // .addIndicators({name: "img 1 (duration: 15%)"}) // add indicators (requires plugin)
                    .addTo(controller);



            });
            ar.forEach((ar2) => {
                var scene2 = new ScrollMagic.Scene({triggerElement: trigg2, duration: '75%'})
                    // animate color and top border in relation to scroll position
                    .setClassToggle(ar2, 'show') // the tween durtion can be omitted and defaults to 1
                    // .addIndicators({name: "img 1 (duration: 15%)"}) // add indicators (requires plugin)
                    .addTo(controller);
            })
        })
    }
}

arrowScrolling();

//lines strokes





//mouse follows


// var backdrop = document.querySelector('.backdrop');

let burger = [...document.querySelectorAll('.burger')];
let centerMenu = [...document.querySelectorAll('.header-menu')][0];

function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                centerMenu.classList.toggle('out');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


let headLinks = [...document.querySelectorAll('.control-side__head')];

function openHeadLinks() {
    if (headLinks.length) {
        headLinks.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

openHeadLinks();
//sliders

let costumers = [...document.querySelectorAll('.our-costumers__list')];

function costumSlider() {
    if (!costumers.length) {

    } else {
        if (window.innerWidth < 768) {
            costumers.forEach((sld) => {
                let sldCont = sld.querySelector('.swiper-container');
                let pagin = sld.querySelector('.dots');

                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    // effect: "flip",
                    slidesPerView: 1,

                    loop: false,
                    grid: {
                        rows: 5,
                    },

                    speed: 600,
                    pagination: {
                        el: pagin,
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'single-dot',
                        bulletActiveClass: 'active',
                    },
                    autoplay: false,
                    // autoplay: {
                    //     // delay: 6500,
                    //     disableOnInteraction: true,
                    // },
                    spaceBetween: 9,


                });
            })
        }

    }
}

costumSlider();




let subSlider = [...document.querySelectorAll('.sub-menu-slider')];

function subStartSlider() {
    if (!subSlider.length) {

    } else {
        subSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.sub-slider');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 6,
                breakpoints: {

                    767: {
                        slidesPerView: 5,
                        spaceBetween: 19,
                    }
                }

            });
        })
    }
}

subStartSlider();


let lineSlider = [...document.querySelectorAll('.slider-members')];

function lineStartSlider() {
    if (!lineSlider.length) {

    } else {
        lineSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.members-slider');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    // delay: 6500,
                    disableOnInteraction: true,
                },
                spaceBetween: 10,
                breakpoints: {

                    767: {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    }
                }

            });
        })
    }
}

lineStartSlider();




//sliders

//search focus


let searchIcon = document.querySelector('.search-icon');

function openSeach() {
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchIcon.classList.toggle('active');
        })
    }
}

openSeach();

//search focus


let searchInput = [...document.querySelectorAll('.search-input input')];

function searchFocusing() {
    if (searchInput.length) {
        searchInput.forEach((btn) => {
            btn.addEventListener('focus', () => {
                if (btn.value !== '') {
                    btn.closest('.header-search__wrap').classList.add('ready');
                }
            });
            btn.addEventListener('focusout', () => {
                btn.closest('.header-search__wrap').classList.remove('ready');
            });
            btn.addEventListener('input', () => {
                if (btn.value === '') {
                    btn.closest('.header-search__wrap').classList.remove('ready');
                } else {
                    btn.closest('.header-search__wrap').classList.add('ready');

                }
            })
        });


    }
}

searchFocusing();


//open sub menu mob

let subMenu = [...document.querySelectorAll('.menu-item-has-children > a')];

function openSubMenu() {
    if (subMenu.length) {
        subMenu.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.menu-item-has-children').classList.toggle('show');
            })
        })
    }
}

openSubMenu();


//open sub menu mob












