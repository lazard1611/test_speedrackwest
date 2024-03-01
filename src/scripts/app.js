import '../index.html';
import '../styles/app.scss';
import { pageLoad } from './utils/utils';
import header from './components/header';
import slider from './components/slider';
import optionsList from './components/options-list';
import quantity from './components/qunatity';
import spoiler from './components/spoiler';

pageLoad(() => {
    header();
    optionsList();
    quantity();
    spoiler();
    slider();
});

