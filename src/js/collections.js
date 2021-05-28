import './imports.js';

import Header from '../components/Header';
import NewsList from '../components/NewsList';

;((doc) => {

    const oApp = doc.querySelector('#app'),
          followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

    let oWrapperList = ''

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

        if (followedList.length) {
            const wrappertpl = NewsList.wrapperTpl();
            oApp.innerHTML += headerTpl + wrappertpl;
            oWrapperList = oApp.querySelector('.news-list');
            renderList(followedList)
        }
    }

    function renderList(data) {
        const newsItemTpl = NewsList.listItemTpl({
            data,
            pageNum: -1
        });

        oWrapperList.innerHTML += newsItemTpl;
        NewsList.imgShow();
    }

    function bindEvent() {
        followedList.length && NewsList.bindEvent(oWrapperList, setCurrentNews);
    }

    function setCurrentNews(options) {
        const { index } = options;
        const currentNews = followedList[index];
        localStorage.setItem('currentNews', JSON.stringify(currentNews));
    }

    init();
})(document);