const optionsList = () => {
    const $optionsList = document.querySelector('.js-product-options-list');
    if (!$optionsList) return;
    const $optionsCustom = document.querySelector('.js-product-options-custom');

    const removeActiveClass = () => {
        const $buttons = $optionsList.querySelectorAll('button');
        $buttons.forEach(($button) => {
            $button.classList.remove('active');
        })
    }

    const handleActiveClass = (e) => {
        const target = e.target;
        if (target.tagName  === 'BUTTON') {
            removeActiveClass();
            target.classList.add('active');
        }

        if (target.classList.contains('custom_mod')) {
            $optionsCustom.classList.remove('hidden');
        } else {
            $optionsCustom.classList.add('hidden');
        }
    }

    $optionsList.addEventListener('click', handleActiveClass);

};

export default optionsList;
