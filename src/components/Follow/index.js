import tpl from './index.tpl';
import './index.scss'

import { tplReplace } from '../../libs/utils';

export default {
    name: 'Follow',
    follow(status) {
        return tplReplace(tpl, {
            star: status ? 'shoucang-full' : 'shoucang',
            title: status ? '已收藏' : '新闻不错？点击收藏'
        });
    },
    bindEvent(doFollow) {
        const oFollow = document.querySelector('.follow'),
              oTitle = oFollow.querySelector('.text');

        oFollow.addEventListener('click', this._setFollow.bind(this, oFollow, oTitle, doFollow), false);
    },
    _setFollow(oFollow, oTitle, doFollow) {
        const className = oFollow.className;
        oFollow.className = 'follow iconfont icon-';

        switch (className) {
            case 'follow iconfont icon-shoucang':
                oFollow.className += 'shoucang-full';
                oTitle.innerHTML = '已收藏';
                doFollow(true);
                break;
            case 'follow iconfont icon-shoucang-full':
                oFollow.className += 'shoucang';
                oTitle.innerHTML = '新闻不错？点击收藏';
                doFollow(false);
                break;
        }
    }
}