import '../index.html';
import '../styles/app.scss';
import { pageLoad } from './utils/utils';
import slider from './components/slider';

pageLoad(() => {
    slider();
});

