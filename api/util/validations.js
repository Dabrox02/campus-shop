export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

export const isNumber = (any) => {
    return !isNaN(Number(any));
}

export const isURL = (url) => {
    var regex = /^(https?|https):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
}
