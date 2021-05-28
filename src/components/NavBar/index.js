import itemTpl from './tpl/item.tpl';
import wrapperTpl from './tpl/listWrapper.tpl';
import './index.scss';

import { tplReplace } from '../../libs/utils';

export default {
    name: 'NavBar',
    tpl(options) {
        let listwrapper = ''

        options.map(({ type, title }, index) => {
            listwrapper += tplReplace(itemTpl, {
                isActive: !index ? 'active' : '',
                type,
                title
            });
            console.log(listwrapper);
        });

        return tplReplace(wrapperTpl, {
            itemList: listwrapper
        });
    }
}