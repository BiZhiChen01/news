import './imports.js';

import { NEWS_TYPE } from '../data';
import api from '../models';
import { scrollToBottom } from '../libs/utils.js';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
import MoreLoading from '../components/MoreLoading';

;((doc) => {

    const oApp = doc.querySelector('#app');
    
    let oNewsWrapper = '',
        t = '';

    const config = {
        type: 'top',
        count: 10,
        pageNum: 0,
        isLoading: false
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
        NewsList.bindEvent(oNewsWrapper, setCurrentNews);
        window.addEventListener('scroll', scrollToBottom.bind(null, getMoreNewsList), false);
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
        minHeight();
    }

    function renderList(data) {
        const { pageNum } = config;

        const newsItemTpl = NewsList.listItemTpl({
            data,
            pageNum
        });

        MoreLoading.remove(oNewsWrapper);
        oNewsWrapper.innerHTML += newsItemTpl;
        NewsList.imgShow();
        config.isLoading = false;
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
        config.isLoading = false;
        getNewsList();
        oNewsWrapper.innerHTML = '';
    }

    function setCurrentNews(options) {
        const { page, index } = options;
        const currentNews = newsData[config.type][page][index];
        localStorage.setItem('currentNews', JSON.stringify(currentNews));
    }

    function getMoreNewsList() {
        if (!config.isLoading) {
            config.pageNum ++;
            const { type, pageNum } = config;
            clearTimeout(t);

            if (pageNum >= newsData[type].length) {
                MoreLoading.add(oNewsWrapper, false);
            } else {
                config.isLoading = true;
                MoreLoading.add(oNewsWrapper, true);
                t = setTimeout(() => {
                    getNewsList();
                }, 1000);
            }
        }
    }

    function minHeight() {
        oNewsWrapper.style.minHeight = doc.documentElement.clientHeight + 'px';
    }

    init();
})(document);