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
            headerTitle: '新闻详情',
            indexAcive: false,
            collectionsAcive: false,
            isDetail: true
        });

        oApp.innerHTML += headerTpl;
    }

    function bindEvent() {

    }

    init();
})(document);