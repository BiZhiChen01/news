import './imports.js';

import { NEWS_TYPE } from '../data';
import api from '../models';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

;((doc) => {

    const oApp = doc.querySelector('#app');

    const config = {
        type: 'top',
        count: 10
    }

    const init = async () => {
        render();
        //await getNewsList();
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

    async function getNewsList() {
        const { type, count } = config;
        const result = await api.getNewsList(type, count);
        console.log(result);
    }

    init();
})(document);