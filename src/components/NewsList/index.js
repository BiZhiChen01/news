import item0Tpl from './tpl/item0.tpl';
import item1Tpl from './tpl/item1.tpl';
import item2Tpl from './tpl/item2.tpl';
import item3Tpl from './tpl/item3.tpl';
import wrapperTpl from './tpl/wrapper.tpl';
import './index.scss';

import { getItemNode, tplReplace } from '../../libs/utils';

export default {
    name: 'NewsList',
    wrapperTpl,
    listItemTpl(options) {
        const { data, pageNum } = options;
        
        let list = '',
            tpl = '';

        data.map((item, index) => {
            if (!item.thumbnail_pic_s) {
                tpl = item0Tpl;
            } else if (item.thumbnail_pic_s && !item.thumbnail_pic_s02) {
                tpl = item1Tpl;
            } else if (item.thumbnail_pic_s02 && !item.thumbnail_pic_s03) {
                tpl = item2Tpl;
            } else if (item.thumbnail_pic_s03) {
                tpl = item3Tpl;
            }

            list += tplReplace(tpl, {
                pageNum,
                index,
                title: item.title,
                author: item.author_name,
                date: item.date,
                thumbnail_pic_s: item.thumbnail_pic_s,
                thumbnail_pic_s02: item.thumbnail_pic_s02,
                thumbnail_pic_s03: item.thumbnail_pic_s03,
                uniquekey: item.uniquekey,
                category: item.category,
                url: item.url
            });
        });

        return list;
    },
    imgShow() {
        const oImgs = document.querySelectorAll('img');
        [...oImgs].map((img) => {
            img.onload = function () {
                img.style.opacity = '1';
            }
        });
    },
    bindEvent(oList, setCurrentNews) {
        oList.addEventListener('click', this._goToDetail.bind(this, setCurrentNews), false)
    },
    _goToDetail(setCurrentNews) {
        const target = getItemNode(arguments[1].target);

        const options = {
            page: target.dataset.page,
            index: target.dataset.index
        }

        setCurrentNews(options);

        window.location.href = 'detail.html'
    }
}