const spoiler = () => {
    const $spoilers = document.querySelectorAll('.js-spoiler');
    if (!$spoilers.length) return;

    $spoilers.forEach(($spoiler) => {
        let isClick = false;
        const $spoilerBody = $spoiler.children[$spoiler.children.length - 1];
        const $spoilerHead = $spoiler.children[0];

        const handleActiveState = () => {
            if (!isClick) {
                $spoiler.classList.add('active');
                $spoilerBody.style.maxHeight = $spoilerBody.scrollHeight + 'px';
                isClick = true;
            } else {
                $spoiler.classList.remove('active');
                $spoilerBody.style.maxHeight = null;
                isClick = false;
            }
        }

        $spoilerHead.addEventListener('click', handleActiveState);
    })
};

export default spoiler;
