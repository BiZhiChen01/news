import './imports.js';

import Header from '../components/Header';
import NewsIframe from '../components/Iframe';
import Follow from '../components/Follow';

;((doc) => {

    const oApp = doc.querySelector('#app'),
          currentNews = JSON.parse(localStorage.getItem('currentNews')),
          followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

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
        const followTpl = createFollowTpl();
        const newsIframTpl = NewsIframe.tpl(currentNews.url);

        oApp.innerHTML += headerTpl + followTpl + newsIframTpl;
    }

    function bindEvent() {
        Follow.bindEvent(doFollow);
    }

    function createFollowTpl() {
        const isFollow = followedList.find(item => item.uniquekey === currentNews.uniquekey);
        
        return Follow.follow(isFollow === undefined ? false : true);
    }

    function doFollow(status) {
        let followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

        if (status) {
            followedList.push(currentNews);
        } else {
            followedList = followedList.filter(item => item.uniquekey !== currentNews.uniquekey);
        }

        localStorage.setItem('followedList', JSON.stringify(followedList));
    }

    init();
})(document);