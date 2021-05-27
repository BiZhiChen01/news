import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../libs/utils';

export default {
    name: 'Header',
    tpl(options) {
        const { headerTitle, indexAcive, collectionsAcive, isDetail } = options

        return tplReplace(tpl, {
            headerTitle,
            indexAcive: indexAcive ? 'active' : '',
            collectionsAcive: collectionsAcive ? 'active' : '',
            isDetail: isDetail ? 'block' : 'none'
        });
    }
}