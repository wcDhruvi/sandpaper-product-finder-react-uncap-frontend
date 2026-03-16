export const sizeSorter = (a, b) => {
    let left = parseFloat(a.replace(' ', '.'));
    let right = parseFloat(b.replace(' ', '.'));
    if (left === right) {
        let dec1 = a.split(' ')[1];
        let dec2 = b.split(' ')[1];
        return dec1 < dec2 ? -1 : 1;
    }
    return left < right ? -1 : 1;
};

export const unique = (arr) => {
    return [...new Set(arr)];
};
