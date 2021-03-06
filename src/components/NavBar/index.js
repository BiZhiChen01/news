import itemTpl from './tpl/item.tpl';
import wrapperTpl from './tpl/listWrapper.tpl';
import './index.scss';

import { scrollToTop, tplReplace } from '../../libs/utils';

export default {
    name: 'NavBar',
    _index: 0,
    tpl(options) {
        let listwrapper = ''

        options.map(({ type, title }, index) => {
            listwrapper += tplReplace(itemTpl, {
                isActive: !index ? 'active' : '',
                type,
                title
            });
        });

        return tplReplace(wrapperTpl, {
            itemList: listwrapper
        });
    },
    bindEvent(setType) {
        const oWrapper = document.querySelector('.nav-wrapper'),
              oItems = oWrapper.querySelectorAll('.nav-item'),
              oLine = oWrapper.querySelector('.line'),
              oTop = oWrapper.querySelector('.top');

        oWrapper.addEventListener('click', this._changeType.bind(this, oItems, oLine, setType), false);
        oTop.addEventListener('click', this._goToTop, false);
    },
    _changeType(items, line, setType) {
        const target = arguments[3].target,
              className = target.className.trim();
        
        if (className === 'nav-item') {
            const type = target.dataset.type;
            setType(type);
            scrollToTop();

            items[this._index].className = 'nav-item',
            this._index = [].indexOf.call(items, target);
            items[this._index].className += ' active';
            line.style.left = (this._index * 100) + 'px';
        }
    },
    _goToTop() {
        scrollToTop();
    },
    NavBarScroll() {
        let oNavBar = document.querySelector('.nav-wrapper'),
            dy = document.documentElement.scrollTop;

        if (dy < 80) {
            oNavBar.style.top = (80 - dy) + 'px';
        } else {
            oNavBar.style.top = '5px';
        }
    }
}