// import Swiper from 'swiper';
import Swiper from '../libs/swiper.min';

// import { Navigation, Pagination } from 'swiper/modules';
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
    }

    const $mainSlider = document.querySelector(SELECTORS.mainSlider);
    const $fraction = document.querySelector(SELECTORS.fraction);
    const $thumbSlider = document.querySelector(SELECTORS.thumbSlider);
    if (!$mainSlider || !$thumbSlider) return;

    let swiperThumb = new Swiper($thumbSlider, {
        // modules: [Navigation],
        loop: false,
        slidesPerView: 5,
        spaceBetween: 8,
        slideToClickedSlide: true,
        freeMode: true,
        watchSlidesProgress: true,

        // navigation: {
        //     nextEl: SELECTORS.nextBtnThumb,
        //     prevEl: SELECTORS.prevBtnThumb,
        // }
    });

    let swiperMain = new Swiper($mainSlider, {
        // modules: [Navigation, Pagination],
        loop: false,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,

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

    swiperThumb.on('click', function () {
        const { clickedIndex } = this;
        swiperThumb.slideTo(clickedIndex);
        swiperMain.slideTo(clickedIndex);
    });

    swiperMain.controller.control = swiperThumb;
    swiperThumb.controller.control = swiperMain;


    console.log(swiperMain);
};

export default slider;
