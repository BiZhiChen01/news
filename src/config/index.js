let BASE_URL = '';

if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://v.juhe.cn';
} else if (process.env.NODE_ENV === 'development') {
    BASE_URL = '/api';
}

const KEY = 'aa9bf2b3d4715f1c47ebd3b2e2b94275c'; //37c3dbcc6bc6fe363653428319678bcd    aa9bf2b3d4715f1c47ebd3b2e2b94275

export {
    BASE_URL,
    KEY
}