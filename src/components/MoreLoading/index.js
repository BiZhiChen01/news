import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../libs/utils';

export default {
    name: 'MoreLoading',
    _tpl(isLoading) {
        return tplReplace(tpl, {
            isLoading: isLoading ? 'loading' : '',
            text: isLoading? '正在加载更多新闻...' : '没有更多新闻了...'
        });
    },
    add(oList, isLoading) {
        const oMoreLoading = oList.querySelector('.more-loading');
        
        if (!oMoreLoading) {
            oList.innerHTML += this._tpl(isLoading);
        }
    },
    remove(oList) {
        const oMoreLoading = oList.querySelector('.more-loading');
        oMoreLoading && oMoreLoading.remove();
    }
}