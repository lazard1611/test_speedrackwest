import { onWindowScroll, exist } from '../utils/utils';

const header = () => {
    const SELECTORS = {
        header: '.header',
    };

    const CLASSNAMES = {
        bodyOpenMenuState: 'body--open_menu_state',
        headerScrollState: 'header--scroll_state',
    };

    const $header = document.querySelector(SELECTORS.header);
    if (!exist([$header])) return;

    const headerScroll = (windowScrollTop) => {
        if (windowScrollTop > 10 && !$header.classList.contains(CLASSNAMES.headerScrollState)) {
            $header.classList.add(CLASSNAMES.headerScrollState);
        } else if (windowScrollTop <= 10 && $header.classList.contains(CLASSNAMES.headerScrollState)) {
            $header.classList.remove(CLASSNAMES.headerScrollState);
        }
    };

    onWindowScroll(headerScroll);
};

export default header;
