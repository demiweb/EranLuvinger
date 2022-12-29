//mouse hidden bg
let bgHidden = document.querySelector('.hidden-bg .img');

function ifHiddenBg() {
    if (bgHidden) {
        function update(e) {
            let rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left || e.touches[0].clientX - rect.left;
            var y = e.clientY - rect.top || e.touches[0].clientY - rect.top;

            bgHidden.style.setProperty('--cursorX', x + 'px');
            bgHidden.style.setProperty('--cursorY', y + 'px');
        }

        bgHidden.addEventListener('mousemove', update)
        bgHidden.addEventListener('touchmove', update);
        bgHidden.addEventListener('mouseout', () => {
            bgHidden.style.setProperty('--cursorX', '-50vw');
            bgHidden.style.setProperty('--cursorY', '-50vh');
        })
    }
}

ifHiddenBg();


//form footer sending

let formFooter = [...document.querySelectorAll('.footer-form')];

function sendFormFooter() {
    if (formFooter.length) {
        formFooter.forEach((frm) => {
            let btn = frm.querySelector('.btn--check');

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                frm.classList.add('sended');
            })
        })
    }
}
sendFormFooter();
//form footer sending


//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();


var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

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


//go recent

let goRecent = [...document.querySelectorAll('.scroll-recent')];

function followRecent() {
    if (goRecent.length) {
        goRecent.forEach((btn) => {
            btn.addEventListener('click', () => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('.recent-cases').offset().top
                }, 400);
            })
        })
    }
}

followRecent();
//go recent


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


        $("body").mousemove(function (event) {
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
                btn.style.strokeDashoffset = lng + 'px';
                btn.style.strokeDasharray = lng + 'px';

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
                document.querySelector('.header').classList.toggle('toggle');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


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



//sliders














