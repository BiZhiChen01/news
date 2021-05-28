import './imports.js';

import { NEWS_TYPE } from '../data';
import api from '../models';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';

;((doc) => {

    const oApp = doc.querySelector('#app');
    
    let oNewsWrapper = '';

    const config = {
        type: 'top',
        count: 10,
        pageNum: 0
    }

    const newsData = {

    }

    const init = async () => {
        render();
        bindEvent();
        await getNewsList();
    }

    function bindEvent() {
        NavBar.bindEvent(setType);
    }

    function render() {
        const headerTpl = Header.tpl({
            headerTitle: '新闻头条',
            indexAcive: true,
            collectionsAcive: false,
            isDetail: false
        });
        const navBarTpl = NavBar.tpl(NEWS_TYPE);
        const newsWrapper = NewsList.wrapperTpl();

        oApp.innerHTML += (headerTpl + navBarTpl + newsWrapper);
        oNewsWrapper = oApp.querySelector('.news-list');
    }

    function renderList(data) {
        const { pageNum } = config;

        const newsItemTpl = NewsList.listItemTpl({
            data,
            pageNum
        });

        oNewsWrapper.innerHTML += newsItemTpl;
        NewsList.imgShow();
    }

    async function getNewsList() {
        const { type, count, pageNum } = config;
    
        if (newsData[type]) {
            renderList(newsData[type][pageNum]);
            return;
        }

        newsData[type] = await api.getNewsList(type, count);
        renderList(newsData[type][pageNum]);
    }

    function setType(type) {
        config.type = type;
        config.pageNum = 0;
        getNewsList();
        oNewsWrapper.innerHTML = '';
    }

    init();
})(document);