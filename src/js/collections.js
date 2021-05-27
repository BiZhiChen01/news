import './imports.js';

import Header from '../components/Header';

;((doc) => {

    const oApp = doc.querySelector('#app');

    const init = () => {
        render();
        bindEvent();
    }

    function render() {
        const headerTpl = Header.tpl({
            headerTitle: '我的新闻',
            indexAcive: false,
            collectionsAcive: true,
            isDetail: false
        });

        oApp.innerHTML += headerTpl;
    }

    function bindEvent() {

    }

    init();
})(document);