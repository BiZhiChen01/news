function tplReplace(template, templateObject) {
    return template().replace(/\{\{(.*?)\}\}/g, (node, key) => {
        return templateObject[key.trim()];
    });
}

function setDataPage(data, count) {
    const length = data.length;

    let pageData = [],
        index = 0;

    while (index < length) {
        pageData.push(data.slice(index, index += count));
    }

    return pageData;
}

export {
    tplReplace,
    setDataPage
}