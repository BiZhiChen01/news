import './imports.js';

import Header from '../components/Header';
import NewsIframe from '../components/Iframe';

;((doc) => {

    const oApp = doc.querySelector('#app'),
          currentNews = JSON.parse(localStorage.getItem('currentNews'));

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
        const newsIframTpl = NewsIframe.tpl(currentNews.url);

        oApp.innerHTML += headerTpl + newsIframTpl;
    }

    function bindEvent() {

    }

    init();
})(document);