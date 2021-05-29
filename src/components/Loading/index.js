import tpl from './index.tpl';
import './index.scss';

export default {
    name: 'Loading',
    tpl,
    add(oList) {
        const onLoading = oList.querySelector('.loading-icon');

        if (!onLoading) {
            oList.innerHTML += this.tpl();
        }
    },
    remove(oList) {
        const onLoading = oList.querySelector('.loading-icon');

        onLoading && onLoading.remove();
    }
}