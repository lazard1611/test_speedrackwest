import '../index.html';
import '../styles/app.scss';
import { pageLoad } from './utils/utils';
import header from './components/header';
import slider from './components/slider';

pageLoad(() => {
    header();
    slider();
});

