import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const animation = () => {
    const SELECTORS = {
        anim: '.js-fade-anim',
        animBrCrambs: '.js-anim-breadcrumbs',
        animTitle: '.js-title-anim',
        boxTitle: '.js-title-box',
        animWrapTitle: '.js-title-anim-wrap',
    }

    gsap.registerPlugin(SplitText);

    const $animFade = document.querySelectorAll(SELECTORS.anim);
    const $animWrapTitle = document.querySelectorAll(SELECTORS.animWrapTitle);
    const $animBrCrambs = document.querySelector(SELECTORS.animBrCrambs);
    let mm = gsap.matchMedia();

    if ($animWrapTitle.length) {
        $animWrapTitle.forEach(($item, index) => {
            const $animTitle = $item.querySelector(SELECTORS.animTitle);
            const $boxTitle = $item.querySelector(SELECTORS.boxTitle);

            const splitTitle = new SplitText($animTitle, {
                type: 'chars',
                linesClass: 'split-line',
            });

            const { chars } = splitTitle;

            mm.add('(min-width: 768px)', () => {
                let tl = gsap.timeline();

                gsap.set(chars, {opacity: 0, rotateX: 90});
                tl.addLabel('start')
                    .to($boxTitle,
                        {
                            duration: 0.6,
                            scale: 1,
                            ease: 'Power4.easeOut',
                            transformOrigin: 'bottom center',
                        },
                        'start'
                    )
                    .to($boxTitle,
                        {
                            delay: 1,
                            duration: 2.2,
                            left:"96%",
                            ease: 'Power2.easeOut'
                        },
                        'start'
                    )
                    .to(chars,
                        {
                            transformOrigin: 'bottom center',
                            opacity: 1,
                            delay: 1,
                            duration: 0.4,
                            ease: 'Power2.easeOut',
                            rotateX: 0,
                            stagger: 0.052,
                        }, 'start'
                    )
                    .to($boxTitle,
                        {
                            transformOrigin: 'bottom center',
                            duration: 0.6,
                            scale:0,
                            ease: 'Power4.easeOut',
                        })
            });

            mm.add('(max-width: 767px)', () => {
                splitTitle.revert()
            })
        })
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
                    onComplete: () => {
                        gsap.set($item, {clearProps: 'y'})
                    }
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
