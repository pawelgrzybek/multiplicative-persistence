"use strict";
module.exports = function multiplicativePersistence(number) {
    if (!Number.isInteger(number) || number < 0) {
        throw new Error("Number should be a positive initger");
    }
    const getProduct = (number) => {
        const numberAsArray = [...number.toString()].map(digit => parseInt(digit));
        return numberAsArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    };
    let numberProduct = getProduct(number);
    let multiplicativeDigitalRoot = number >= 10 ? 1 : 0;
    while (numberProduct >= 10) {
        multiplicativeDigitalRoot++;
        numberProduct = getProduct(numberProduct);
    }
    return multiplicativeDigitalRoot;
};
