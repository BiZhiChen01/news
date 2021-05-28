import HTTP from '../libs/http';

import { BASE_URL, KEY } from '../config';
import { setDataPage } from '../libs/utils';

class Service extends HTTP {
    getNewsList(type, count) {
        return new Promise((resolve, reject) => {
            this.ajax({
                url: BASE_URL + '/toutiao/index',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    type,
                    key: KEY
                },
                success(res) {
                    const result = setDataPage(res.result.data, count);
                    resolve(result);
                },
                error(err) {
                    reject(err)
                }
            });
        });
    }
}

export default new Service();