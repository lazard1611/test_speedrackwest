import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/swiper-bundle.css';

const slider = () => {
    const SELECTORS = {
        mainSlider: '.js-product-slider',
        fraction: '.js-product-fraction',
        nextBtn: '.js-product-btn-next',
        prevBtn: '.js-product-btn-prev',
        thumbSlider: '.js-product-thumb',
        nextBtnThumb: '.js-thumb-btn-next',
        prevBtnThumb: '.js-thumb-btn-prev',
        openGallery: '.js-open-gallery',
    }

    const $mainSlider = document.querySelector(SELECTORS.mainSlider);
    const $fraction = document.querySelector(SELECTORS.fraction);
    const $thumbSlider = document.querySelector(SELECTORS.thumbSlider);
    if (!$mainSlider || !$thumbSlider) return;

    const $openGallery = document.querySelector(SELECTORS.openGallery);

    let arrFancyOption = [];

    const createFancyOption = (url) => {
        return {
            src: url,
            type: 'image',
        }
    }

    const createArrFancyOption = () => {
        const $imgs = $mainSlider.querySelectorAll('.swiper-slide img');
        if (!$imgs.length) return;
        $imgs.forEach(($img) => {
            const srcImg = $img.getAttribute('src');
            arrFancyOption.push(createFancyOption(srcImg));
        });
    }

    createArrFancyOption();


    $openGallery.addEventListener('click', () => {
        const activeIndex = swiperMain.activeIndex;

        Fancybox.show(arrFancyOption, {
            startIndex: activeIndex,
            on: {
                'Carousel.change': (fancybox, carousel, slide) => {
                    swiperMain.slideTo(slide);
                },
            }
        });
    });

    const swiperThumb = new Swiper($thumbSlider, {
        loop: false,
        spaceBetween: 8,
        slideToClickedSlide: true,
        freeMode: true,

        breakpoints: {
            768: {
                slidesPerView: 5,
            },

            0: {
                slidesPerView: 4.4,
            },
        },
    });

    const swiperMain = new Swiper($mainSlider, {
        modules: [Navigation, Pagination, Thumbs],
        loop: false,
        freeMode: true,
        thumbs: {
            swiper: swiperThumb
        },

        navigation: {
            nextEl: SELECTORS.nextBtn,
            prevEl: SELECTORS.prevBtn,
        },

        pagination: {
            el: $fraction,
            type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
                return `<span class='${currentClass}'> </span>/<span class='${totalClass}'> </span>`;
            },
        },
    });

    const $nextBtnThumb = document.querySelector(SELECTORS.nextBtnThumb);
    const $prevBtnThumb = document.querySelector(SELECTORS.prevBtnThumb);

    if ($nextBtnThumb && $prevBtnThumb) {
        $nextBtnThumb.addEventListener('click', () => swiperMain.slideNext());
        $prevBtnThumb.addEventListener('click', () => swiperMain.slidePrev());
    }
};

export default slider;
