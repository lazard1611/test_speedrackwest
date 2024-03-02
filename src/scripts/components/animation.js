import gsap from 'gsap';

const animation = () => {
    const SELECTORS = {
        anim: '.js-fade-anim',
        animBrCrambs: '.js-anim-breadcrumbs',
        animTitle: '.js-title-anim',
    }

    const $animFade = document.querySelectorAll(SELECTORS.anim);
    const $animTitle = document.querySelectorAll(SELECTORS.animTitle);
    const $animBrCrambs = document.querySelector(SELECTORS.animBrCrambs);

    if ($animTitle.length) {
        $animTitle.forEach(($item, index) => {
            gsap.fromTo($item,
                {
                    rotateX: 90,
                },
                {
                    rotateX: 0,
                    duration: 0.8,
                    delay: 1 * index,
                }
            )
        });
    }

    if ($animFade.length) {
        $animFade.forEach(($item, index) => {
            gsap.fromTo($item,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.5 * index,
                }
            )
        });
    }

    if ($animBrCrambs) {
        const $items = $animBrCrambs.querySelectorAll('li');
        $items.forEach(($item, index) => {
            gsap.fromTo($item,
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3 * index,
                }
            )
        })
    }
};

export default animation;
