import './imports.js';

import { NEWS_TYPE } from '../data';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

;((doc) => {

    const oApp = doc.querySelector('#app');

    const init = () => {
        render();
        bindEvent();
    }

    function render() {
        const headerTpl = Header.tpl({
            headerTitle: '新闻头条',
            indexAcive: true,
            collectionsAcive: false,
            isDetail: false
        });
        const navBarTpl = NavBar.tpl(NEWS_TYPE);

        oApp.innerHTML += headerTpl + navBarTpl;
    }

    function bindEvent() {

    }

    init();
})(document);